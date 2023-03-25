module.exports = {
  "extends": [
      "eslint:recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 13,
      "sourceType": "module"
  },
  "plugins": [
      "@typescript-eslint",
      "prettier"
  ],
  "globals": {
      "MutationObserverInit": true,
      "MutationCallback": true,
      "ScrollLogicalPosition": true,
      "JSX": true
  },
  "ignorePatterns": [
      "*.d.ts",
  ],
  "rules": {
      "no-empty-pattern": "off",
      "no-undef": "off",
      "no-unused-vars": "off",
      "no-cond-assign": "off",
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
      "no-constant-condition": ["error", {"checkLoops": false}],
      "prettier/prettier": "error"
  },
};  