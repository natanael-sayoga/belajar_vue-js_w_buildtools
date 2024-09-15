//managing vue router
//how to navigate each url and it corespondencing data
import CreatePage from "@/views/CreatePage.vue";
import EditPage from "@/views/EditPage.vue";
import PageContent from "@/views/PageContent.vue";
import PageList from "@/views/PageList.vue";
import Pages from "@/views/Pages.vue";
import { createRouter } from "vue-router";
import { createWebHashHistory } from "vue-router";

/*
    since we are using createWebHashHistory, the base url will be:
    https://myBaseUrl/# ...
*/

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        //array of route
        {path: "/:currentPage?", component: PageContent},
        {
            path:"/pages", 
            component: Pages,
            children:[
                {path: "", component:PageList},
                {path:"create", component:CreatePage},
                {path:":currentPage/edit", component:EditPage}
            ]
        }
    ]
})

export default router