import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // 1. Extend the standard Next.js rules
  ...compat.extends("next/core-web-vitals"),

  // 2. Configuration for specific ignored files/directories
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      // If you are using next.config.js in the root, it might also need ignoring
      "next.config.js", 
    ],
  },

  // 3. New Configuration Object to OVERRIDE/DISABLE RULES
  {
    // Apply these rules to all relevant files
    files: ["**/*.js", "**/*.jsx"], 
    rules: {
      // Disable the rule that enforces using next/image (so you can use <img>)
      "@next/next/no-img-element": "off",

      // Disable the rule that forces component display names (if you have anonymous functions)
      "react/display-name": "off",

      // Optional: You can also disable a common rule if you want to use console.log freely
      "no-console": "off",

      // Optional: If you find Next.js's component prop passing checks too strict:
      // "@next/next/no-unwanted-html-props": "off", 
    },
  },
];

export default eslintConfig;
