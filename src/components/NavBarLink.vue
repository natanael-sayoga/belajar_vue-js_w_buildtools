<template>
    <RouterLink 
        class="nav-link"
        aria-current="page"
        active-class="active underlined"
        >{{page.title}}
    </RouterLink>
</template>

<script>
export default{
    props:['page']
}
</script>

<style scoped>
    .underlined{
        text-decoration: underline !important;
    }
</style>