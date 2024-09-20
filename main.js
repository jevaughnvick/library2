function Book(title, author, pageNumber, isRead){

    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.isRead = isRead;
}

Book.prototype.info = function (){

    return `${this.title} by ${this.author}, ${`${this.pageNumber} pages`}, ${this.isRead ? "You've read this book" : "You haven't read this book"}`
}

const addBookBtn = document.querySelector("#add-book");
const bookContainer = document.querySelector("#container");
const form = document.querySelector("form");
const shadow = document.querySelector("#shadow");

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pageNumberInput = document.querySelector("#page-number");
const radioButtons = {
    yes: document.querySelector("#book-read-yes"),
    no: document.querySelector("#book-read-no")
};

const library = [];

const submitBtn = document.querySelector("input[value=Submit]")


addBookBtn.addEventListener("click", toggleForm);
shadow.addEventListener("click", toggleForm);

submitBtn.addEventListener("click", e => {

    addBookToLibrary(e);
});

function clearGrid(){
    bookContainer.innerHTML = "";
}

function addBookToLibrary(e){

    e.preventDefault();

    let title = titleInput.value;
    let author = authorInput.value;
    let pageNumber = pageNumberInput.value;
    let isRead;

    radioButtons.yes.checked ? isRead = true : isRead = false;

    if(title === "" || author === "" || pageNumber === "" || isRead === undefined){
        alert("Please complete the form.")
    }else{
        const newBook = new Book(title, author, pageNumber, isRead);
        library.push(newBook);
        toggleForm();
        clearGrid();
        parseLibrary();
    }
}





function toggleForm(){

    form.classList.toggle("hidden");
    shadow.classList.toggle("hidden");
    titleInput.value = "";
    authorInput.value = "";
    pageNumberInput.value = "";
    radioButtons.yes.checked = false;
    radioButtons.no.checked = false;
}

function parseLibrary(){

    for(let book of library){
        createBookCard(book);
    }
}

function createBookCard(book){

    const bookCard = document.createElement("div");
    bookCard.setAttribute("class", "card");

    const titleDiv = document.createElement("div");
    titleDiv.setAttribute("class", "title");
    titleDiv.textContent = book.title;

    const authorDiv = document.createElement("div");
    authorDiv.setAttribute("class", "author");
    authorDiv.textContent = book.author;

    const pageNumberDiv = document.createElement("div");
    pageNumberDiv.setAttribute("class", "pageNumber");
    pageNumberDiv.textContent = book.pageNumber;

    const btnContainerDiv = document.createElement("div");
    btnContainerDiv.setAttribute("class", "button-cont");

    const btn = document.createElement("button");
    btn.setAttribute("class", "is-read");
    btn.textContent = book.isRead ? "You've read this book" : "You haven't read this book";
    btn.style.color = book.isRead ? "darkgreen" : "indianred";

    btnContainerDiv.appendChild(btn);
    bookCard.appendChild(titleDiv);
    bookCard.appendChild(authorDiv);
    bookCard.appendChild(pageNumberDiv);
    bookCard.appendChild(btnContainerDiv);
    bookContainer.appendChild(bookCard);
}