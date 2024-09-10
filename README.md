# Vue_Basic_wBuildTool

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Async Method problem:
due to the nature of async method, some elements can be rendered twice or more because on the first render attempt, the async FETCH method is probably haven't finished fethching all the data yet resulting in empty Promise (objek Promise yang belum di resolve). However after some times had passed and all the data had been fetched, Vue notices that the data had been update and try to render once more using the newly fetched data, this is why some elements can appears as if it is being rendered twice. The solution is using the CORRECT APPLICATION LIFE CYCLE during an async method call