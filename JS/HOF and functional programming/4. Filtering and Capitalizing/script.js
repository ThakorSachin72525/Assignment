const listofBooks = [
    {nameofBook: "ABC", author: "jack", publicationYear: 2000},
    {nameofBook: "ENF", author: "rock", publicationYear: 2010},
    {nameofBook: "HIJ", author: "rocky", publicationYear: 2020},
    {nameofBook: "LMN", author: "jacky", publicationYear: 2023},
];

function filterAndCapitalizeAuthors(books) {
    const filteredBooks = books.filter(book => book.publicationYear >= 2010);
    
    const updatedBooks = filteredBooks.map(book => {
        return {
            ...book,
            author: book.author.toUpperCase()
        };
    });

    return updatedBooks;
}

const filteredBooks = filterAndCapitalizeAuthors(listofBooks);
console.log(filteredBooks);
