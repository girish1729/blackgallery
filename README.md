# Simple image gallery for Angular, Svelte, React and Vue

Blackgallery is a simple image gallery that can show upto 15 images
using simple CSS and JS.

No zoom, no fancy effects.

![Blackgallery](https://raw.githubusercontent.com/girish1729/blackgallery/main//screenshots/sample-blackgallery.png)

## Source for porting

Make sure you have typescript installed globally.

```shell
# npm install -g typescript
```

```shell

cd source
yarn
yarn build
yarn start
```

The build takes care of converting typescript to JavaScript.

The project is split into packages and demo directories.

The package builds a module that can be uploaded to npm registry.

The demo simply installs the module and acts as an example for
integration into third party projects.

## Live demo

Check out [live demo](https://velvety-ganache-63cc22.netlify.app/)

This is from an image config file that reads like this.

```js

 const images = [{
         "src": "https://source.unsplash.com/random?sig=2",
         "alt": "Beautiful scenery I "
     },
     {
         "src": "https://source.unsplash.com/random?sig=4",
         "alt": "Beautiful scenery II "
     },
     {
         "src": "https://source.unsplash.com/random?sig=3",
         "alt": "Beautiful scenery III "
     },
     {
         "src": "https://source.unsplash.com/random?sig=1",
         "alt": "Beautiful scenery IV "
     },
     {
         "src": "https://source.unsplash.com/random?sig=45",
         "alt": "Beautiful scenery IV "
     },
     {
         "src": "https://source.unsplash.com/random?sig=37",
         "alt": "Beautiful scenery IV "
     },
     {
         "src": "https://source.unsplash.com/random?sig=20",
         "alt": "Beautiful scenery IV "
     },

 ]
```

## Instructions for Angular, Vue, Svelte and React


```shell
	$ npm install blackgallery-angular
# or 
	$ yarn add blackgallery-angular
```
### Vue 3

```shell
	$ npm install blackgallery-vue
# or 
	$ yarn add blackgallery-vue
```
### React.js

```shell
	$ npm install blackgallery-react
# or 
	$ yarn add blackgallery-react
```
### Svelte

```shell
	$ npm install blackgallery-svelte
# or 
	$ yarn add blackgallery-svelte
```


