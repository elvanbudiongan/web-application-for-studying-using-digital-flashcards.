# ebbudiongan-10252024-homework

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### App 
Using Vue & TypeScript, create a web application for studying using digital flashcards. This app has two modes: initializing mode and studying mode. During initializing mode, users input digital flashcards. A digital flashcard consists of two properties: question and answer. After the user has finished inputing all digital cards they need, the app can proceed into studying mode.
During studying mode, the flashcards are organized into a deck, with each card displaying only the question. When the user clicks a card, a modal appears with a form displaying the question, a field for the answer, and a submit button. After clicking the submit button, the correct answer is revealed in the modal. The modal also has a button to close it. This app uses an array instead of a database for storage.
