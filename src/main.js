import { createApp } from 'vue'
import myApp from './myApp.vue'

//createApp(App).mount('#app')
const myAppEntry = createApp(myApp)
myAppEntry.mount("#myApp")