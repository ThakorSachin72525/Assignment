function logTitlesInAlphabeticalOrder(titles) {
    // Sort the titles in alphabetical order
    const sortedTitles = titles.sort();
  
    // Log the titles to the console
    sortedTitles.forEach((title, index) => {
      console.log(title);
    });
  }
  
  function getBookTitles(books, callback) {
    // Use map to extract the titles from the books
    const titles = books.map(book => book.title);
  
    // Call the callback function with the list of titles
    callback(titles);
  }
  
  // Example usage:
  const books = [
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  ];
  
  getBookTitles(books, logTitlesInAlphabeticalOrder);
  