import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",   // ✅ THIS FIXES ERROR
      globals: globals.node   // ✅ for Node environment
    }
  },
  js.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  }
];