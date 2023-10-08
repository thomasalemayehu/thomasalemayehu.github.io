let books = [
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
    {
        title: "Mockingjay: The Final Book of The Hunger Games",
        author: "Suzanne Collins",
        libraryID: 3257,
    },
];


function addBook(title,author,libraryID){
    let newBook = {title,author,libraryID};
    books.push(newBook);z
    return newBook;
}


function getTitles(){
    let titles = books.map((book)=> book.title).sort();
    return titles;
}

function findBook(title){
    let result = books.filter((book) => book.title.toLowerCase().includes(title.toLowerCase())).sort();

    if(result.length != 0) return result[0];

    return null;
}


