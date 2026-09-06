let myLib = [];

function Book(id, title, author) {
    // constructor
    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = id;
    this.title = title;
    this.author = author;
}

function addBookToLib(title, author){
    /* take params, create book,
    then store in array */
    id = crypto.randomUUID()
    const book = new Book(id,title,author);
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

    // create new book entry
    addBookToLib(title,author);

    // display titles
    displayBookTitles();
}
form.addEventListener('submit', processNewBook);

function removeEntry(id){
    myLib = myLib.filter(book => book.id !== id);
    displayBookTitles();
}