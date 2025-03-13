
import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.browser,
    },
  },

  {
    files: ["**/__tests__/**/*.js"],
    languageOptions: {
      globals: globals.jest,
    },
  },

  {
    rules: {
      'no-var': 'error',
      'prefer-const': 'warn',
    },
  },

  pluginJs.configs.recommended,
];
