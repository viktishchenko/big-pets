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
npm i -D stylelint stylelint-config-standard stylelint-order stylelint-config-rational-order-fix
```

.stylelint.json

```javascript
{
  "extends": [
	  "stylelint-config-standard",
	  "stylelint-config-rational-order-fix"
	],
  "plugins": ["stylelint-order"],
  "rules": {
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

# react hooks

![react hooks](./readmeAssets/react_hooks.jpg)

![why functional components better way](./readmeAssets/why_hooks_better.jpg)

![main hooks](./readmeAssets/react_hooks_main.jpg)

# useState hook

```javascript
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
```

![use state](./readmeAssets/use_state.jpg)

![use state example](./readmeAssets/use_state_comp_example.jpg)

![use state update](./readmeAssets/use_state_upd.jpg)

![use state lazy init](./readmeAssets/use_state_lazy_init.jpg)

# useEffect hook

```javascript
import { useEffect, useState } from "react";
import { Button, Htag, P, Tag } from "../components";

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState(0);

  /**
   * Хуки должны вызываться на
   * верхнем уровне, это может
   * проверить специальный плагин:
   */

  /**
   * npm i -D eslint-plugin-react-hooks
   * ДОБАВИЛ ЭТО РАСШИРЕНИЕ НО ОНО НЕХУА
   * НЕ РАБОТАЕТ
   * 
   *   if (counter > 0) {
   *   useEffect(() => {
   *   console.log("yepp");
   *   console.log("Counter " + counter);
   *   });
  }
   * 
   */

  /**
   *
   * 	 useEffect(() => {
   *		console.log("Counter " + counter);
   *		return function cleanup() {
   *		console.log("Unmount");
   *		};
   *	});
   *
   * ---res---
   *
   *  Unmount
   *  Counter 1
   *
   */

  /**
   *
   * 	 useEffect(() => {
   *		console.log("Counter " + counter);
   *		return function cleanup() {
   *		console.log("Unmount");
   *		};
   *	}, []);
   *
   * ---res---
   *
   *  Counter 0
   *
   */

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
```

![useEffect hook](./readmeAssets/useEffect_hook.jpg)

![useEffect render](./readmeAssets/useEffect_render.jpg)

![useEffect render other](./readmeAssets/useEffect_render_other.jpg)

</details>

---

[unworking images.d.ts module →](./images.d.ts) `//no type hints`

---

<details>
<summary>
rating componenet
</summary>

[more info →](./components/Rating/)

```javascript
import { useState } from "react";
import { Rating } from "../components";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState(4);

  return (
    <>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}
```

</details>

<details>
<summary>
HOC
</summary>

![HOC](./readmeAssets/hoc.jpg)

![HOC example](./readmeAssets/hoc_example.jpg)

![HOC example with types](./readmeAssets/hoc_with_types.jpg)

![HOC rules](./readmeAssets/hoc_rules.jpg)

![HOC example view](./readmeAssets/hoc_like_view.jpg)

[look at that HOC →](./layout/Layout.tsx)
[and this, how it's work →](./pages/index.tsx)

</details>

<details>
<summary>
grid with e.g.

</summary>

![align justify memorization](./readmeAssets/align_memo.jpg)

[template und gap 0 →](../grid-eg/main0.css)

[align und justify 1 →](../grid-eg/main1.css)

[cell distribution 2 →](../grid-eg/main2.css)

[grid playground →](https://www.cssgridplayground.com/)

[grid template | areas 3 →](../grid-eg/main3.css)

---

## best practice??

![grid & column](./readmeAssets/column.jpg)

![naming columns & areas](./readmeAssets/naming_column.jpg)

![use fractions](./readmeAssets/fractions.jpg)

</details>

<details>
<summary>
add basic layout
</summary>

![basic layout](./readmeAssets/basic_layout.jpg)

</details>

<details>
<summary>
main layout
</summary>

## add time lib

```javascript

npm i date-fns
```

![add footer](./readmeAssets/add_footer.jpg)

</details>

<details>
<summary>
ssr
</summary>

## env var

![environment variables](./readmeAssets/env_var.jpg)

![link to var](./readmeAssets/link_to_var.jpg)

![env global](./readmeAssets/env_global.jpg)

![env availability](./readmeAssets/var_availability.jpg)

![env with test](./readmeAssets/env_with_test.jpg)

## browser rendering

![browser rendering](./readmeAssets/browser_render.jpg)

![browser rendering with spa](./readmeAssets/br_ren_spa.jpg)

![ssr vs csr](./readmeAssets/ssr_vs_csr.jpg)

![hydration ssr](./readmeAssets/hydration_ssr.jpg)

![weak side ssr](./readmeAssets/weak_side_ssr.jpg)

![strong side ssr](./readmeAssets/strong_side_ssr.jpg)

![seo_comparison](./readmeAssets/seo_comparison.jpg)

![what dicide nextjs](./readmeAssets/what_dicide_nextjs.jpg)

![performance comparison](./readmeAssets/performance_comparison.jpg)

![metric comparison](./readmeAssets/metric_comparison.jpg)

</details>

<details>
<summary>
nextjs ssr
</summary>

## prerender

![prerender](./readmeAssets/prerender.jpg)

![ssr function](./readmeAssets/ssr_function.jpg)

![getstaticprops](./readmeAssets/getstaticprops.jpg)

![getstaticprops e.g.](./readmeAssets/getstatic_eg.jpg)

![extra options](./readmeAssets/extra_options.jpg)

![return params](./readmeAssets/return_params.jpg)

![incremental static generate](./readmeAssets/incremental_static_generate.jpg)

![get static path](./readmeAssets/getstaticpath.jpg)

![get static path func](./readmeAssets/getstaticpath_func.jpg)

![true ssr](./readmeAssets/true_ssr.jpg)

![ssr props](./readmeAssets/ssr_props.jpg)

![extra options ssr](./readmeAssets/extra_options_ssr.jpg)

[getStaticProps e.g. →](./pages/index.tsx)

![layout with menu from backend](./readmeAssets/layout_with_backendMenu_ssr.jpg)

[getStaticPaths e.g. →](./pages/courses/%5Balias%5D.tsx)

![getStaticPaths e.g. →](./readmeAssets/getStaticPaths_eg.jpg)

</details>

<details>
<summary>
useContext
</summary>

![useContext hook](./readmeAssets/data_transfer.jpg)

![context creation](./readmeAssets/context_creation.jpg)

![provider creation](./readmeAssets/provider_creation.jpg)

![context usage](./readmeAssets/context_usage.jpg)

![additional features](./readmeAssets/additional_features.jpg)

[useContext with e.g. →](./context/app.context.tsx)

</details>

<details>
<summary>
basic menu
</summary>

![basic menu](./readmeAssets/basic_menu.jpg)

</details>

<details>
<summary>
link component useRouter hook
</summary>

![link component](./readmeAssets/link_component.jpg)

![usage link component](./readmeAssets/useage_link_component.jpg)

![throw href with component](./readmeAssets/throw_component.jpg)

---

## useRouter hook

![useRouter hook usage](./readmeAssets/useRouter_usage.jpg)

![Router structure](./readmeAssets/useRouter_structure.jpg)

</details>

<details>
<summary>
sidebar layout
</summary>

![sidebar layout](./readmeAssets/sidebar_layout.jpg)

</details>

<details>
<summary>
page component
</summary>

[page component →](./page-components/TopPageComponent/)

![page layout](./readmeAssets/page_layout.jpg)

[page layout →](./components/HhData/)

![full page layout](./readmeAssets/full_page_layout.jpg)

</details>

<details>
<summary>
useReducer description
</summary>

![useReducer description ](./readmeAssets/useReducer_desc.jpg)

![useReducer usage ](./readmeAssets/useReducer_usage.jpg)

[useReducer →](./page-components/TopPageComponent/TopPageComponent.tsx)[component →](./components/Sort/)[logic →](./page-components/TopPageComponent/sort.reducer.ts)

![sorting layout ](./readmeAssets/sorting_layout.jpg)

</details>

<details>
<summary>
searchbar
</summary>

[search bar →](./components/Search/)

![search bar](./readmeAssets/searchbar.jpg)

</details>

<details>
<summary>
product component grid
</summary>

[product grid →](./components/Product/)

![product component grid](./readmeAssets/product_grid.jpg)

---

### [add component style](./components/Product/)

![add component style](./readmeAssets/component_style.jpg)

### [add more](./components/Product/)

![add more component style](./readmeAssets/more_styles.jpg)

</details>

<details>
<summary>
image component
</summary>

![image component](./readmeAssets/image_component.jpg)

![layout types](./readmeAssets/img_layout.jpg)

![custom loader](./readmeAssets/custom_loader.jpg)

![quality config](./readmeAssets/quality_config.jpg)

---

### does not work ... (╯°□°）╯︵ ┻━┻

[next.config.js](./next.config.js)

```javascript
module.exports = {
  images: {
    domains: ["courses-top.ru"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
```

Product.tsx image module

```javascript
import Image from "next/image";

<Image
  src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
  alt={product.title}
  width={70}
  height={70}
/>;
```

</details>

<details>
<summary>
product layout adaptive
</summary>

![product adaptive](./readmeAssets/product_adaptive.jpg)

</details>
