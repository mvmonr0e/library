const myLib = [
    {id:0, title: "awesome book", author: "awesome author"}
];

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

function displayBookTitle(){
    // loop thru array and display all titles
    const tableBody = document.getElementById('table-body');
    const rowsHtml = myLib.map(book => {
        return `
            <tr>
                <td>${book.id}</td>   
                <td>${book.title}</td>  
                <td>${book.author}</td>
            </tr>   
        `;
    }).join('');

    tableBody.innerHTML = rowsHtml;
}