<template>
    <NavBar
        v-bind:pages="pages"
        v-bind:on-click-listener="(index) => {currentPage = index}"
        v-bind:current-page="currentPage">
    </NavBar>
    <PageContent
        v-bind:page="pages[currentPage]">
    </PageContent>
</template>

<script>
import PageContent from './components/PageContent.vue';
import NavBar from './components/NavBar.vue';

export default{
    components:{
        PageContent,
        NavBar
    },
    data(){
        return{
            currentPage:0,
            pages:[
            {
                title: 'Home', 
                url: "home.html",
                pageTitle: "Welcome to Home Page",
                content: "HOME PAGE CONTENTS"
            },
            {
                title: 'About', 
                url: "about.html",
                pageTitle: "Welcome to About Page",
                content: "ABOUT PAGE CONTENTS"
            },
            {
                title: 'Contacts', 
                url: "contacts.html",
                pageTitle: "Welcome to Contacts Page",
                content: "CONTACTS PAGE CONTENTS"
            }
            ]
        }
    }
}
</script>