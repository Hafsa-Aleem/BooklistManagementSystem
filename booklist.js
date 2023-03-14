const form = document.querySelector("#book-form")
const tableList = document.querySelector("#book-list")

window.addEventListener("DOMContentLoaded",(e)=>{
    let books = JSON.parse(localStorage.getItem("books"))
    books.forEach(book=> createRow(book.title,book.author,book.isbn))
})

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const isbn = document.querySelector("#isbn").value
    if(title==''|| author=='' || isbn=='')
    {
        alert("please fill all the details")
        if(title=='')
        {
            document.querySelector("#title").focus()
        }
        else if(author=='')
        {
            document.querySelector("#author").focus()
        }
        else if(isbnr=='')
        {
            document.querySelector("#isbn").focus()
        }
        return
    }
    const book={title:title,author:author,isbn:isbn} //javascript Object Notation (format)
    clearAllFields()

    createRow(title,author,isbn)

    // localStorage.setItem("books",JSON.stringify(book))
    addRow(book)
})

tableList.addEventListener("click",(e)=>{
    removeRow(e)
    deleteRow(e)
})

function clearAllFields(){
    document.querySelector("#title").value=''
    document.querySelector("#author").value=''
    document.querySelector("#isbn").value=''
}

function createRow(title,author,isbn){
    
    // tableList.innerHTML =`<tr>
    // <td>${title}</td>,<td>${author}</td>,<td>${isbn}</td>
    // <td><a href="#" class="btn btn-danger float-right delete">X</a></td></tr>`

    const tr= document.createElement("tr")
              tr.innerHTML=`<td>${title}</td>
              <td>${author}</td>
              <td>${isbn}</td>
              <td><a href="#" class="btn btn-danger float-right delete">X</a></td>`
              tableList.appendChild(tr)
}

function addRow(book){
    let newbook;
    if(localStorage.getItem("books")==null){
        newbook=[]
    }
    else{
        newbook=JSON.parse(localStorage.getItem("books"))
    }
    newbook.push(book)
    localStorage.setItem("books",JSON.stringify(newbook))
    
}

function removeRow(e){
    if(e.target.classList.contains("delete")){
        tableList.removeChild(e.target.parentElement.parentElement)
    }
}

function deleteRow(e){
    let books = JSON.parse(localStorage.getItem("books"))
    const isbn=e.target.parentElement.previousElementSibling.textContent
    const newbooks=books.filter(book=>book.isbn!==isbn)
    localStorage.setItem("books",JSON.stringify(newbooks))
}



// function sum(a,b){
//     return a+b
// }

// const sum = (a,b)=> {
//     return a+b
// }      