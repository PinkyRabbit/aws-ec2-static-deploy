import globals from "globals";
import pluginJs from "@eslint/js";
import functional from "eslint-plugin-functional";
import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {files: ["**/*.mjs"], languageOptions: {sourceType: "module"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  stylisticJs.configs['all-flat'],
  functional.configs.externalVanillaRecommended,
  functional.configs.recommended,
  functional.configs.stylistic,
  functional.configs.disableTypeChecked,
];
