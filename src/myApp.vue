<template>
    <div v-if="pages.length>0">
        <NavBar>

        </NavBar>
        <RouterView>
            
        </RouterView>
        <!-- <PageContent
            v-bind:page="pages[currentPage]">
        </PageContent>
        <create-page
            @page-created="pageCreated"
            @sum="sum">
        </create-page> -->
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default{
    components:{
        NavBar
    },
    created(){
        //after the object is created 
        //but before the templated is mounted (rendered)
        this.getPages()
    },
    data(){
        return{
            currentPage:0,
            pages: []
        }
    },
    methods:{
        async getPages(){
            let pages = await fetch("../public/pages.json")
            let jsonPages = await pages.json()
            this.pages = jsonPages
        },
        // pageCreated(myObj){
        //     console.log(myObj)
        //     this.pages.push(myObj)
        // },
        sum(a , b){
            console.log(a + b)
        }
    }
}
</script>