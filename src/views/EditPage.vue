<template>
    <!-- <h6>{{ data.pageTitle }}</h6> -->
    <div class="container mb-3">
        <form action="">
            <div class="row">
                <div class="col">
                    <label for="formInput" class="form-label">
                        Page Title
                    </label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="formInput" 
                        placeholder="Example input"
                        v-model="data.pageTitle"
                    >
                </div>
                <div class="col">
                    <label for="formInput2">Page Content</label>
                    <textarea 
                        type="text" 
                        class="form-control" 
                        id="formInput2" 
                        placeholder="Enter your text" 
                        rows="5"
                        v-model="data.content">
                    </textarea>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label for="formInput3" class="form-label">
                        Link Text
                    </label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="formInput3" 
                        placeholder="Example input"
                        v-model="data.title"
                    >
                </div>
                <div class="col">
                    <label for="formInput4" class="form-label">
                        Link URL
                    </label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="formInput4" 
                        placeholder="Example input"
                        v-model="data.url"
                    >
                </div>
            </div>
            <div class="row">
                <div class="col form-check">
                    <input 
                        v-model="data.published"
                        class="form-check-input" 
                        type="checkbox" 
                        id="gridCheck1"
                        v-bind:checked="data.published ? true : false">
                    <label class="form-check-label" for="gridCheck1">published</label>
                </div>
                <div class="col form-check">
                    <input 
                        disabled
                        class="form-check-input" 
                        type="checkbox" 
                        id="gridCheck2"  
                        v-bind:checked="isValid">
                    <label class="form-check-label" for="gridCheck2">Valid</label>
                </div>
            </div>
            <div class="mb-3">
                <button 
                    class="btn btn-primary"
                    v-on:click.prevent="validateForm()">
                    Update Page
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { reactive, watch, inject, onBeforeMount, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

let router = useRouter()
let route = useRoute()
let $pages = inject("$pages")

let currentPage = null
let page = null
let data = reactive({
    title: "",
    url: "",
    pageTitle: "",
    content: "",
    published: false
})

// let $pages = inject("$pages")
// let currentPage = route.params.currentPage
// let page = $pages.getSinglePage(currentPage)

const isValid = computed(
    ()=>{
        return !(!data.title || !data.url || !data.pageTitle || !data.pageContent)
    }
)

function getCurrentPage(){
    return !route.params.currentPage ? 0 : route.params.currentPage
}
function getPage(index){
    return $pages.getSinglePage(index)
}
function print(pageObj){
    console.log(pageObj)
}
function setForm(pageObj){
    data.title = pageObj.title
    data.url = pageObj.url
    data.pageTitle = pageObj.pageTitle
    data.content = pageObj.content
    data.published = pageObj.published
}
function validateForm(){
    if(!data.title || !data.url || !data.pageTitle || !data.content){
        alert("please fill all datas!")
        return
    }
    let newPage = {
        "title": `${data.title}`, 
        "url": `${data.url}`,
        "pageTitle": `${data.pageTitle}`,
        "content": `${data.content}`,
        "published":`${data.published}`
    }
    print(newPage)
    $pages.updatePage(getCurrentPage(), newPage)
}

watch(
    () => route.params,
    (newParams, oldParams) => {
        currentPage = getCurrentPage()
        page = getPage(currentPage)
        setForm(page)
    }
)

onBeforeMount(() => {
    currentPage = getCurrentPage()
    page = getPage(currentPage)
    setForm(page)
    // console.log("all mounted")
    // console.log(`current page: ${currentPage}`)
    // console.log(`page: ${page}`)
})

</script>