<template>
    <div class="container" v-if="page!=null">
        <h1>
            {{ page.title }}
        </h1>
        <p>
            {{ page.content }}
        </p>
    </div>
</template>

<script>
    export default{
        // props:['page'], no need to use props since we are using url params
        data(){
            return{
                currentPage: null,
                page: null
            }
        },
        created(){
            this.currentPage = this.getCurrentPage()
            this.page = this.getCurrentPageContent()

            this.$watch(
                () => this.$route.params,
                (newParams, oldParams) => {
                    // if( newParams===null || oldParams===null){
                    //     this.page = this.$pages.getSinglePage(0)
                    // }
                    // else{
                    //     this.currentPage = newParams.currentPage
                    //     this.page = this.$pages.getSinglePage(this.currentPage)    
                    // }
                    this.currentPage = newParams.currentPage
                    this.page = this.$pages.getSinglePage(this.currentPage)
                }
            )
            //this.currentPage = this.$route.params.currentPage
        },
        methods:{
            getCurrentPage(){
                return !this.$route.params.currentPage ? 0 : this.$route.params.currentPage
            },
            getCurrentPageContent(){
                return this.$pages.getSinglePage(this.currentPage)
            }
        }
    }
</script>