<template>
    <div v-if="pages.length>0">
        <NavBar
            v-bind:pages="pages"
            v-bind:on-click-listener="(index) => {currentPage = index}"
            v-bind:current-page="currentPage">
        </NavBar>
        <!-- <PageContent
            v-bind:page="pages[currentPage]">
        </PageContent> -->
        <create-page
            v-bind:page-created="pageCreated">
        </create-page>
    </div>
</template>

<script>
import PageContent from './components/PageContent.vue';
import NavBar from './components/NavBar.vue';
import CreatePage from './components/CreatePage.vue';

export default{
    components:{
        PageContent,
        NavBar,
        CreatePage
    },
    created(){
        //after the object is created 
        //but before the templated is mounted (rendered)
        this.getPages()
    },
    data(){
        return{
            currentPage:0,
            pages: [],
            // pages: [
            //             {
            //                 "title": "Home", 
            //                 "url": "home.html",
            //                 "pageTitle": "Welcome to Home Page",
            //                 "content": "HOME PAGE CONTENTS"
            //             }            
            //         }
            //     ]
        }
    },
    methods:{
        async getPages(){
            let pages = await fetch("../public/pages.json")
            let jsonPages = await pages.json()
            this.pages = jsonPages
        },
        pageCreated(myObj){
            console.log(myObj)
            this.pages.push(myObj)
        }
    }
}
</script>