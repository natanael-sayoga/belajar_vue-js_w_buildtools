<template>
    <h6>{{ data.page.pageTitle }}</h6>
</template>

<script setup>
import { reactive, watch, inject } from 'vue';
import { useRouter, useRoute } from 'vue-router';

let router = useRouter()
let route = useRoute()

let $pages = inject("$pages")
let data = reactive({
    currentPage:getCurrentPage(),
    page: getPage(getCurrentPage())
})

// let $pages = inject("$pages")
// let currentPage = route.params.currentPage
// let page = $pages.getSinglePage(currentPage)

function getCurrentPage(){
    return !route.params.currentPage ? 0 : route.params.currentPage
}
function getPage(index){
    return $pages.getSinglePage(index)
}

watch(
    () => route.params,
    (newParams, oldParams) => {
        data.currentPage = getCurrentPage()
        data.page = getPage(data.currentPage)
    }
)
</script>