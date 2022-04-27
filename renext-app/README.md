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
npm i -D stylelint stylelint-config-standard stylelint-order stylelint-config-rational-order
```

.stylelint.json

```javascript
{
  "extends": [
	  "stylelint-config-standard",
	    "stylelint-config-rational-order"
	],
  "plugins": ["stylelint-order",
    "stylelint-config-rational-order/plugin"],
  "rules": {
	      "order/properties-order": [],
    "plugin/rational-order": [true, {
      "border-in-box-model": false,
      "empty-line-between-groups": false
    }],
    "indentation": [2],
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

<details>
<summary>
react base
</summary>

![react components](./readmeAssets/ract_component.jpg)

![react components life cycle](./readmeAssets/life_cycle.jpg)

</details>

- [add language →](./pages/_document.tsx)

- [add first component →](./components/Htag/)

<details>
<summary>
add classnanes @types
</summary>

```javascript
npm i -D @types/classnames // cn()
```

</details>

<details>
<summary>
add button ts HTML property types 
</summary>

```javascript
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  appearance: "primary" | "ghost";
  // with optional parametr ? arrow
  arrow?: "right" | "down" | "none";
}
```

look at this beauty (╯°□°）╯︵ ┻━┻

![ts HTML property types](./readmeAssets/property_types.jpg)

</details>

<details>
<summary>
add svg module
</summary>

```javascript
npm i -D @svgr/webpack
```

`Parsing error : Cannot find module 'next/babel'`

to fix this issue: modify eslint.config.json

```javascript
{
	"extends": [
		"next/babel", // add this ext
		"next/core-web-vitals"
	]
}
```

</details>

- [add tag component →](./components/Tag/)

<details>
<summary>
react hooks
</summary>

![react hooks](./readmeAssets/react_hooks.jpg)

![why functional components better way](./readmeAssets/why_hooks_better.jpg)

![main hooks](./readmeAssets/react_hooks_main.jpg)

![use state](./readmeAssets/use_state.jpg)

![use state example](./readmeAssets/use_state_comp_example.jpg)

![use state update](./readmeAssets/use_state_upd.jpg)

![use state lazy init](./readmeAssets/use_state_lazy_init.jpg)

- basic useState hook

      import { useState } from "react";
      import { Button, Htag, P, Tag } from "../components";

      export default function Home(): JSX.Element {
      const [counter, setCounter] = useState(0);
      return (
      	<>
      	<Htag tag="h1">{counter}</Htag>
      	<Button
      		onClick={() => {
      		setCounter((x) => x + 1);
      		}}
      		appearance="primary"
      		arrow="right"
      	>
      		Button
      	</Button>
      	</>
      );
      }

</details>
