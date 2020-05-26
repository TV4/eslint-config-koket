# ESLint config Koket
Eslint rules for the koket projects

## Installation

Add these dependencies

```
"devDependencies": {
  "eslint": "3.18.0",
  "eslint-config-airbnb-base": "11.1.2",
  "eslint-config-koket": "TV4/eslint-config-koket",
  "eslint-plugin-import": "2.2.0",
  "eslint-plugin-react": "7.0.1"
}
```

and create a ```.eslintrc``` file:

```
{
  "extends": "koket",
}
```

## Update eslint dependencies in this package
```
npx install-peerdeps eslint-config-airbnb
```
