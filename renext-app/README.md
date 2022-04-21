This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# big pets project

start project

```javascript
npx create-next-app renext-app --use-npm
cd renext-app
code .
wsl touch tsconfig.json
npm i -D typescript @types/react @types/node
```

run dev mode

```javascript
npm run dev
```

![start next project](./readmeAssets/renext_start.jpg)

<details>
<summary>
add eslint
</summary>

add?

```javascript
npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

.eslintrs?

```javascript
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "semi": "off",
    "@typescript-eslint/semi": [
      "warn"
    ],
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        "allowSingleExtends": true
      }
    ]
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ]
}

```

</details>

<details>
<summary>
add stylelint
</summary>

```javascript
npm i -D stylelint stylelint-config-standard stylelint-order
```

.stylelint.json

```javascript
{
  "extends": ["stylelint-config-standard"],
  "plugins": ["stylelint-order"],
  "rules": {
    "indentation": ["tab"],
    "color-hex-case": "upper",
    "selector-class-pattern": "^.*$",
    "declaration-block-no-redundant-longhand-properties": [
      true,
      {
        "ignoreShorthands": ["/grid/"]
      }
    ]
  }
}
```

</details>

<details>
<summary>
debug
</summary>

```javascript
npm i -D cross-env
```

.vscode/launch.json

```javascript
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Launch Program",
      "skipFiles": ["<node_internals>/**"],
      "port": 9229
    }
  ]
}
```

`F5` button

![start next project](./readmeAssets/run_debug.jpg)

</details>
