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
                <label for="formInput2">Page Content</label>
                <textarea 
                    type="text" 
                    class="form-control" 
                    id="formInput2" 
                    placeholder="Enter your text" 
                    rows="5"
                    v-model="content"></textarea>
            </div>
            <div class="col-md-3">
                <div class="mb-3">
                    <label for="formInput3" class="form-label">
                        Link Text
                    </label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="formInput3" 
                        placeholder="Example input"
                        v-model="linkText"
                    >
                </div>
                <div class="mb-3">
                    <label for="formInput4" class="form-label">
                        Link URL
                    </label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="formInput4" 
                        placeholder="Example input"
                        v-model="linkUrl"
                    >
                </div>
                <div class="row mb-3">
                    <div class="form-check">
                        <input 
                            disabled
                            class="form-check-input" 
                            type="checkbox" 
                            id="gridCheck1"  
                            v-bind:checked="valid">
                        <label class="form-check-label" for="gridCheck1">Published</label>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <button 
                    class="btn btn-primary"
                    v-on:click.prevent="validateForm()">
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
            content:"",
            linkText:"", //padanannya title
            linkUrl:"",
            valid:false
        }
    },
    methods:{
        validateForm(){
            if(!this.pageTitle || !this.content || !this.linkText || !this.linkUrl){
                alert("Please complete form!")
                this.valid = false
                return
            }
            this.pageCreated({
                'pageTitle':this.pageTitle,
                'content': this.content,
                'linkText': this.linkText,
                'linkUrl':this.linkUrl
            })
            this.valid = true
        }
    }
}
</script>