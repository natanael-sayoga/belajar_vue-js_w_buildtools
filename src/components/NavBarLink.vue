<template>
    <a 
        class="nav-link"
        v-bind:class="activeClass"
        v-bind:href="page.url" 
        v-bind:title="`go to ${page.title} Page`" 
        aria-current="page"
        >{{page.title}}
    </a>
</template>

<script>
export default{
    props:['page', 'isActive'],
    computed:{
        activeClass(){
            return {
                active: this.isActive,
                underlined: this.isActive
            }
        }
    }
}
</script>

<style scoped>
    .underlined{
        text-decoration: underline !important;
    }
</style>