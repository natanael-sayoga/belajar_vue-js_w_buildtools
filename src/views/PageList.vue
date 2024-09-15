<template>
    <div class="container">
        <h4>Created Pages</h4>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Page Title</th>
                    <th>Page Link</th>
                    <th>Is Published?</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(page, index) in $pages.getAllPages()" v-bind:key="index" v-on:click.prevent="toEditPage(index)">
                    <td>{{ page.title }}</td>
                    <td>{{ page.url }}</td>
                    <td>{{ page.published ? "Yes":"No" }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <button
        v-bind:class="`btn btn-primary btn-sm`"
        v-on:click.prevent="toCreatePage()">
        Create
    </button>
    <div class="container">
        <center>
            <p>Click Counter</p>
            <p>{{ data.clickCount }}</p>
            <button class="btn btn-primary" v-on:click.prevent="click()">Click</button>
        </center>
    </div>
</template>

<script setup>
import { ref, reactive, inject } from 'vue';
import { useRouter, useRoute } from 'vue-router';

let data = reactive({clickCount:0})
let $pages = inject("$pages")
let router = useRouter()

function click(){
    data.clickCount++
}

function toCreatePage(){
    router.push('/pages/create')
}

function toEditPage(currentPage){
    router.push(`/pages/${currentPage}/edit`)
}
//the classic Option API:
// export default{
//     data(){
//         return{
//             clickCount:0
//         }
//     },
//     methods:{
//         click(){
//             this.clickCount++
//         }
//     }
// }
</script>

<style scoped>
.table.table-hover tr:hover{
    cursor: pointer;
    background: mediumseagreen;
}
</style>