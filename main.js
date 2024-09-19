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

const library = [];


function addBookToLibrary(){

    let title;
    let author;
    let pageNumber;
    let isRead;

    const newBook = new Book(title, author, pageNumber, isRead);
    library.push(newBook);
}


let book1 = new Book("Millionaire Fastlane", "MJ Demarco", 355, true);
let book2 = new Book("Life, Liberty and the Pursuit of Entrepreneurship", "MJ Demarco", 402, true);
let book3 = new Book("The Self-Taught Programmer", "Cory Althoff", 207, true);


library.push(book1, book2, book3)

function parseLibrary(){

    for(let book of library){
        createBookCard(book)
    }
}

parseLibrary()

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
    btn.textContent = "Stuff here";

    btnContainerDiv.appendChild(btn);
    bookCard.appendChild(titleDiv);
    bookCard.appendChild(authorDiv);
    bookCard.appendChild(pageNumberDiv);
    bookCard.appendChild(btnContainerDiv);
    bookContainer.appendChild(bookCard);
}