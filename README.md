# ESLint config Koket
Eslint rules for the koket projects

## Installation

```
npm i eslint-config-koket -D
```

create a ```.eslintrc``` file:

```
{
  "extends": "koket",
}
```

and update the test script in package.json

```
"scripts": {
  "test": "eslint ."
},
```

## Update eslint dependencies in this package
```
npx install-peerdeps eslint-config-airbnb
```
