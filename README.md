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

# Problems and Sollutions:
## Async Method problem:
<div style="text-align: justify">
due to the nature of async method, some elements can be rendered twice or more because on the first render attempt, the async FETCH method is probably haven't finished fethching all the data yet resulting in empty Promise (objek Promise yang belum di resolve). However after some times had passed and all the data had been fetched, Vue notices that the data had been update and try to render once more using the newly fetched data, this is why some elements can appears as if it is being rendered twice. The solution is using the CORRECT APPLICATION LIFE CYCLE during an async method call
</div>

## V-Model and the Problem With Data Binding on Form Input
<div style="text-align: justify">
let say we have a text box with the value attribute being binded to a variable inside our data() method and a button in which every time the button is being clicked, the value of the text box is being printed to our console <br><br>you will find that everytime the button is being clicked, nothing is being printed to our console, HAL INI KARENA DATA BINDING BERSIFAT ONE WAY, artinya tiap kali data berubah, maka element akan secara otomatis melakukan re-rendering tetapi hal ini tidak berlaku sebaliknya. element yang terikat dengan data akan melakukan re-render, tetapi jika element tersebut mengalami perubahan (dalam kasus ini value-nya berubah) data di objek data() sendiri tidak akan diupdate <br><br>tldr: the data() can tell the object what to do but the object cant tell the data() what to do in case there is an update <br><br>hal ini bisa diatasi dengan bantuan directive @input:

```javascript
@input="(event) => {data = event.target.value}" //event.target adalah element input (text field), dia disebut target karena dialah yang dikenai event
```
<br> the alternative is using <a href="https://vuejs.org/guide/components/v-model.html">v-model</a>, data binding via v-model memperbolehkan komunikasi terjadi 2 arah, jika ada perubahan data maka objek akan di render ulang dan jika ada perubahan di binded objek maka data akan diupdate
</div>

## Emiting event instead of Binding the event
let say in our entry page (usually the app.vue) we have data of all the pages that need to be shown and then we have a Child Component that has the ability to inserting a new page data, usually we can hanle it like this:
1. binding a method inside the child component props:
```vue
<!-- template in parent component: -->
<create-page
    v-bind:page-created="pageCreated">
</create-page>

<!-- the script in child component -->
<script>
export default{
    props:['pageCreated', 'otherProps']
}
</script>
```
this is called 'emulating' an event, dimana ada method dari parent yg dikirim sebagai property yang bisa dipakai oleh child (of course, hal ini berarti kita harus menyiapkan props pageCreated di child component)
2. emiting the method inside the child component so that the parent component received the callback:
```vue
<!-- template in parent component: -->
<create-page
    @page-created="pageCreated">
</create-page>

<!-- the script in child component -->
<script>
export default{
    props:['otherProps'],
    emits:{
        pageCreated(){
            //insert data validation
        }
    },
    /* or declare it like this:
    emits: ['pageCreated']
    */
    method:{
        caller(){
            //...
            this.$emit('pageCreated', {
                //data that need 
                //to be passed inside
            })
            //...
        }
    }
}
</script>
```
this way we don't need to declare the function pageCreated inside our props, sehingga benar-benar terjadi pemisahan antara data (PROPS) dan method (EMITS)

## Changing layout if url parameter is changed:
by default, vue is reactive to the changes happening inside our component, contohnya jika terjadi perubahan data pada Option Object (the one we are DEFAULT EXPORT-ing maka template akan melakukan re-render). However, the component itself isn't going to react / re-render to changes happening in the url variable (since THIS PARTICULAR COMPONENT IS ALREADY BEING RENDERED, so vue see no point in re-rendering) to handle this, create a WATCHER OBJECT inside our created() method, refers to this documentation: [Accessing url parameter using router instance](https://router.vuejs.org/guide/essentials/dynamic-matching.html)