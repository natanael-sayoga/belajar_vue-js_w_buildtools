let pagesJson = localStorage.getItem("pages")
let pagesArray = JSON.parse(pagesJson)

export default{
    getAllPages(){
        return pagesArray
    },
    getSinglePage(currentPage){
        return pagesArray[currentPage]
    },
    updatePage(index, updatedPage){
        pagesArray[index] = updatedPage
        localStorage.setItem('pages', JSON.stringify(pagesArray))
    }
}