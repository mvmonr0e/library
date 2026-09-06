let myLib = [];

function Book(id, title, author, read) {
    // constructor
    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = id;
    this.title = title;
    this.author = author;
    this.read = read;
}

function addBookToLib(title, author, read){
    /* take params, create book,
    then store in array */
    id = crypto.randomUUID();
    const book = new Book(id,title,author,read);
    myLib.push(book);
}

function displayBookTitles(){
    // loop thru array and display all titles
    const tableBody = document.getElementById('table-body');
    const rowsHtml = myLib.map(book => {
        return `
            <tr>
                <td>${book.id}</td>   
                <td>${book.title}</td>  
                <td>${book.author}</td>
                <td>
                    <button class="btn btn-primary" onclick="readBook('${book.id}')">Read</button>
                    <p>${book.read}</p>
                </td>
                <td>
                    <button class="btn btn-danger" onclick="removeEntry('${book.id}')">Remove</button>
                </td>
            </tr>   
        `;
    }).join('');

    tableBody.innerHTML = rowsHtml;
}

const form = document.getElementById('newBookForm');
function processNewBook(event) {
    // prevent refresh
    event.preventDefault(); 

    // grab values from html
    title = document.getElementById('bookTitle').value;
    author = document.getElementById('bookAuthor').value;
    read = false;

    // create new book entry
    addBookToLib(title,author,read);

    // display titles
    displayBookTitles();
}
form.addEventListener('submit', processNewBook);

function removeEntry(id){
    myLib = myLib.filter(book => book.id !== id);
    displayBookTitles();
}

function readBook(id){
    myLib = myLib.map(book =>
        book.id === id
            ? {...book, read: !book.read}
            : book
    );
    displayBookTitles();
}