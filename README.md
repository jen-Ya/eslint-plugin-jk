# My eslint preferences

## Configs

Rules only:

- `recommended`
- `recommended-jsx`
- `recommended-jsx-jk` includes custom rule `jk/jsx-closing-bracket-location`
- `recommended-ts`

Including parser options, settings and env:

- `default-jsx-node`
- `default-node`
- `default-ts`

## Minial .eslintrc

Rules only. See more available configs above.

```js
{
	"extends": ["plugin:jk/recommended"],
	"plugins": ["jk"]
}
```

## Default Node config

including parser options and env. See more default configs above.

```js
{
	"extends": ["plugin:jk/default-node"],
	"plugins": ["jk"]
}
```

## Custom rules

- `jk/jsx-closing-bracket-location` enforces correct indentation of closing brackets for jsx tags

- `jk/jsx-closing-tag-location` enforces correct indentation of closing jsx tags