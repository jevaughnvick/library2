function Book(title, author, pageNumber, isRead){

    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.isRead = isRead;
}

Book.prototype.info = function (){

    return `${this.title} by ${this.author}, ${`${this.pageNumber} pages`}, ${this.isRead ? "You've read this book" : "You haven't read this book"}`
}


const library = [];



function addBookToLibrary(){

    let title;
    let author;
    let pageNumber;
    let isRead;

    const newBook = new Book(title, author, pageNumber, isRead);
    library.push(newBook);
}
