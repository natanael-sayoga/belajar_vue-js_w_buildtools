<template>
    <div class="container mb-3">
        <form action="">
            <div class="mb-3">
                <label for="formInput" class="form-label">
                    Page Title
                </label>
                <input 
                    type="text" 
                    class="form-control" 
                    id="formInput" 
                    placeholder="Example input"
                    v-model="pageTitle"
                >
            </div>
            <div class="mb-3">
                <label for="formInput2">Another label</label>
                <textarea 
                    type="text" 
                    class="form-control" 
                    id="formInput2" 
                    placeholder="Enter your text" 
                    rows="5"
                    v-model="content"></textarea>
            </div>
            <div class="mb-3">
                <button 
                    class="btn btn-primary"
                    v-on:click.prevent="pageCreated({
                        'pageTitle': pageTitle,
                        'content': content
                    })">
                    Create Page
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default{
    props:['pageCreated'],
    data(){
        return{
            pageTitle:"",
            content:""
        }
    }
}
</script>