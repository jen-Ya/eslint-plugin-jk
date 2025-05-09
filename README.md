# My eslint preferences

## Configs

Rules only:

- `eslint-plugin-jk/configs/recommended`
- `eslint-plugin-jk/configs/recommendedJsx`
- `eslint-plugin-jk/configs/recommendedTs`

Including parser options, settings and env:

- `eslint-plugin-jk/configs/defaultBrowser`
- `eslint-plugin-jk/configs/defaultJsxNode`
- `eslint-plugin-jk/configs/defaultNode`
- `eslint-plugin-jk/configs/defaultTs`

## Minial eslint.config.js

Rules only. See more available configs above.

```js
import config from 'eslint-plugin-jk/configs/defaultNode';

export default config;
```
