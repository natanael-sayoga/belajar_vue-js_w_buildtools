import { createApp } from 'vue'
import myApp from './myApp.vue'
import router from './utils/Router.js'
import $pages from './datas/Datas.js'

//initializing data:
if(localStorage.getItem("pages") === null){
    localStorage.setItem("pages", `[
        {
            "title": "Home", 
            "url": "home.html",
            "pageTitle": "Welcome to Home Page",
            "content": "HOME PAGE CONTENTS",
            "published":true
        },
        {
            "title": "About", 
            "url": "about.html",
            "pageTitle": "Welcome to About Page",
            "content": "ABOUT PAGE CONTENTS",
            "published":true
        },
        {
            "title": "Contacts", 
            "url": "contacts.html",
            "pageTitle": "Welcome to Contacts Page",
            "content": "CONTACTS PAGE CONTENTS",
            "published":true
        }
    ]`)
}

//createApp(App).mount('#app')
const myAppEntry = createApp(myApp)

myAppEntry.use(router)
myAppEntry.provide("$pages", $pages)

myAppEntry.mount("#myApp")

//provide centralized data access:
//1. if u are using Option API (this will enable $pages to all components):
//   myAppEntry.config.globalProperties.$pages = $pages
//2. if u are using Composition API (this will enable $pages ONLY to component that need them):
//   myAppEntry.provide("$pages", $pages)