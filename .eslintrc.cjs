module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  "extends": [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended"
  ],
  "plugins": [
    "import",
    "react",
    "react-hooks",
    "@typescript-eslint"
  ],
  "settings": {
    "react": {
      "version": "18.2.0"
    }
  },
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2020,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "rules": {
    "prettier/prettier": 0,
    "no-console": ["warn", { "allow": ["log"] }],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "jsx-quotes": [2, "prefer-single"],
    "react/jsx-closing-bracket-location": [1, "line-aligned"],
    "react/jsx-max-props-per-line": [2, {
      "maximum": 2
    }],
    "react/jsx-curly-newline": [2, {
      "multiline": "require",
      "singleline": "forbid"
    }],
    "quotes": [2, "single", {
      "avoidEscape": true,
      "allowTemplateLiterals": true
    }],
    "react/jsx-sort-props": [2, {
      "callbacksLast": true,
      "shorthandFirst": true
    }],
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        "allowSingleExtends": true
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/*.stories.*",
          "**/.storybook/**/*.*",
          "**/cypress/**/*.*",
          "**/cypress/**/*.test.*"
        ],
        "peerDependencies": true
      }
    ]
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
}
