import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// FlatCompat helps convert old configs to the new flat config format
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // ✅ Pass each config separately, recommended usage
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("next"),
  ...compat.extends("plugin:@typescript-eslint/recommended"),

  // Override rules specifically for TypeScript files
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Disable base no-unused-vars rule to avoid conflicts
      "no-unused-vars": "off",
      // Enable TS-specific no-unused-vars rule
      "@typescript-eslint/no-unused-vars": "error",
    },
  },
];
