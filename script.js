const myLib = [];

function Book(id, title, author) {
    // constructor
    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = id;
    this.title = title;
    this.author = author;
    this.info = function() {
        console.log(`"{this.title} by {this.author`);
    }
}

function addBookToLib(id, title, author){
    /* take params, create book,
       then store in array */
    const book = new Book(id,title,author);
    myLib.push(book);
}

function displayBookTitle(){
    // loop thru array and display all titles
}