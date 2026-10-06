import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export default [
  // 1. Global ignores (don't lint compiled folders or dependency files)
  {
    ignores: ["**/dist/**", "**/node_modules/**", "**/build/**", "**/.next/**"],
  },
  
  // 2. Lint rules applied across the entire workspace (Libraries & Apps)
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "react": reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      // Standard strict TypeScript checks
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      
      // React specific rules (vital for your web app folder)
      "react/react-in-jsx-scope": "off", // Not required for modern React (17+)
      "react/jsx-uses-react": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
    settings: {
      react: {
        version: "detect", // Automatically matches your React version
      },
    },
  },
];
