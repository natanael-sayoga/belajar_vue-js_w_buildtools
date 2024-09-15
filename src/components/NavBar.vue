<template>
    <nav class="navbar navbar-expand-lg" 
        v-bind:class="{
            'navbar-dark bg-dark': theme=='dark',
            'navbar-light bg-light': theme=='light'
        }">
        <div class="container-fluid">
            <a href="#" class="navbar-brand">My Test App</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li v-for="(page, index) in filteredPages" class="nav-item" v-bind:key="index">
                    <NavBarLink
                        v-bind:page="page"
                        :to="`/${index}`" >
                    </NavBarLink>
                </li>
                <li>
                    <NavBarLink
                        :to="'/pages/create'"
                        v-bind:page="{
                            title: 'Create Page'
                        }"
                    >
                    </NavBarLink>
                </li>
            </ul>
            <button class="btn btn-primary" v-on:click.prevent="changeTheme()">Dark Mode</button>
        </div>
    </nav>
</template>

<script>
    import NavBarLink from './NavBarLink.vue';
    
    export default{
        components:{
            NavBarLink
        },
        data(){
            return{
                pages:[],
                theme: 'light'
            }
        },
        computed:{
            filteredPages(){
                return this.pages.filter((page)=>{return page.published == true})
            }
        },
        created(){
            this.theme = this.getCurrentTheme(),
            this.pages = this.$pages.getAllPages()
        },
        methods: {
            changeTheme(){
                let default_theme = "light"
                if(this.theme == "light"){
                    default_theme = "dark"
                }
                this.theme = default_theme;
                this.saveCurrentTheme()
            },
            saveCurrentTheme(){
                localStorage.setItem('theme', this.theme)
            },
            getCurrentTheme(){
                return localStorage.getItem('theme')
            }
        }
    }
</script>