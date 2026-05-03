import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  js.configs.recommended,
  eslintConfigPrettier,
  { files: [
    "**/*.{js,mjs,cjs}",
  ], 
  plugins: { js }, 
  extends: [
    "js/recommended",
    "prettier"
  ], 
  languageOptions: { globals: globals.browser } },
]);
