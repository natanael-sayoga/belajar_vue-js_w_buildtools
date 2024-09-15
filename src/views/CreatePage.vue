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
                <div class="row">
                    <div class="col form-check">
                        <input 
                            v-model="published"
                            class="form-check-input" 
                            type="checkbox" 
                            id="gridCheck1">
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
    emits: ['pageCreated', 'sum'],
    data(){
        return{
            pageTitle:"",
            content:"",
            linkText:"",
            linkUrl:"",
            published:false
        }
    },
    computed:{
        isValid(){
            //visual representation whether the form is valid
            return !(!this.pageTitle || !this.content || !this.linkText || !this.linkUrl)
        }
    },
    methods:{
        validateForm(){
            if(!this.pageTitle || !this.content || !this.linkText || !this.linkUrl){
                alert("Please complete form!")
                return
            }
            this.$emit("pageCreated", {
                'title': this.linkText,
                'url':this.linkUrl,
                'pageTitle':this.pageTitle,
                'content': this.content,
                'published':this.published
            })
            // this.$emit("sum", 10, 11)
            this.clearForm()
        },
        clearForm(){
            this.pageTitle="",
            this.content="",
            this.linkUrl="",
            this.linkText="",
            this.published=false
        }
    },
    watch:{
        pageTitle(newTitle, oldTitle){
            //oldTitle -> value dilihat dari saat data belum diubah 
            //            sama sekali, think of it as a data stream
            //            ex: saat title masih empty
            //
            //tiap kali ada perubahan, asal linkText == oldTitle,
            //execute this code
            if(this.linkText == oldTitle){
                this.linkText = newTitle
            }
        }
    }
}
</script>