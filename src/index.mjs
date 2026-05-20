import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { OUTPUT_FILES, PROJECT_TITLE, SEARCH_PROFILES, WINDOWS } from "./config.mjs";
import { fetchWindowLeaderboard } from "./github.mjs";
import { renderHtml, renderMarkdown } from "./report.mjs";

const currentFile = fileURLToPath(import.meta.url);
const projectRoot = resolve(dirname(currentFile), "..");

async function writeOutput(relativePath, content) {
  const absolutePath = resolve(projectRoot, relativePath);
  await mkdir(dirname(absolutePath), { recursive: true });
  await writeFile(absolutePath, content, "utf8");
  return absolutePath;
}

function buildPayload(leaderboards) {
  return {
    title: PROJECT_TITLE,
    generatedAt: new Date().toISOString(),
    tokenConfigured: Boolean(process.env.GITHUB_TOKEN),
    profiles: SEARCH_PROFILES.map((profile) => ({
      label: profile.label,
      query: profile.query
    })),
    leaderboards
  };
}

async function main() {
  const token = process.env.GITHUB_TOKEN || "";
  const leaderboards = [];

  for (const windowConfig of WINDOWS) {
    const board = await fetchWindowLeaderboard(windowConfig, token);
    leaderboards.push(board);
  }

  const payload = buildPayload(leaderboards);

  const outputs = await Promise.all([
    writeOutput(OUTPUT_FILES.json, `${JSON.stringify(payload, null, 2)}\n`),
    writeOutput(OUTPUT_FILES.markdown, renderMarkdown(payload)),
    writeOutput(OUTPUT_FILES.html, renderHtml(payload))
  ]);

  console.log("Security radar generated successfully.");
  for (const output of outputs) {
    console.log(`- ${output}`);
  }
}

main().catch((error) => {
  console.error("Failed to generate security radar.");
  console.error(error.message);
  process.exitCode = 1;
});
