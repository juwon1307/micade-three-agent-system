import fs from "node:fs";

export function loadOpenAiApiKey(envPath = ".env"): string | undefined {
  const configuredKey = process.env.OPENAI_API_KEY?.trim();

  if (configuredKey) {
    return configuredKey;
  }

  if (!fs.existsSync(envPath)) {
    return undefined;
  }

  const envFileValue = fs.readFileSync(envPath, "utf8").trim();

  if (!envFileValue) {
    return undefined;
  }

  if (envFileValue.startsWith("OPENAI_API_KEY=")) {
    return envFileValue.slice("OPENAI_API_KEY=".length).trim();
  }

  return envFileValue;
}
