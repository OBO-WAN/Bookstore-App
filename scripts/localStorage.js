function saveToLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
}

function getFromLocalStorage() {
    let storedBooks = JSON.parse(localStorage.getItem('books'));
    if (storedBooks === null) {
      books = books; // to be better coded!
    } else {
      books = storedBooks;
    }
  }