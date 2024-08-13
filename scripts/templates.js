let bookImages = ['./assets/png/array/1.png', './assets/png/array/2.png', './assets/png/array/3.png', './assets/png/array/4.png', './assets/png/array/5.png', './assets/png/array/6.png', './assets/png/array/7.png', './assets/png/array/8.png', './assets/png/array/9.png']

  function render() {
    let cardContent = document.getElementById('section');
    cardContent.innerHTML = '';
    
    for (let i = 0; i < books.length; i++){
    const book = books[i];

    cardContent.innerHTML += getCardsTemplate(book, i);
    renderCommentSection(book, i);
    renderLikeImage(i);
    renderEmptyBook(book, i);

    }
  }

function getCardsTemplate(book, i) {
  return`
      <div class="card">
        <h1>${book.name}</h1>
                    <div class="hl"></div>
                <div class="book-picture"> <img src="${bookImages[i]}"></div>
                    <div class="hl"></div>
                <div class="total-like-container">
                  <span class="price">${book.price.toFixed(2).replace(".", ",")} €</span>
                    <div class="like-emoji">
                      <span>${book.likes}</span>
                      <img src="./assets/png/filledHearth.png" onclick="likeOrDislike(${i})" id="likeImg${i}">
                    </div>
                </div>
                <div class="book-general-description">
                   <div class="book-category">
                    <span>Author</span>
                    <span>Genre</span>
                    <span>Erscheinungsjahr</span>
                   </div>
                   <div class="book-category-description">
                    <span>: ${book.author}</span>
                    <span>: ${book.genre}</span>
                    <span>: ${book.publishedYear}</span>
                   </div>
                </div>
                     <div class="hl"></div>
                
                <div class="comment-section">
                    <span id="commentID${i}" class="comment-headline">Kommentare:</span>
                        <div class="comment-section">
                          <div id="commentatorID${i}" class="commentator"></div>
                          <div id="commentSectionID${i}" class="comment"></div>
                        </div>
                </div>
                <div class="add-comment-section">
                    <input id="inputField${i}" placeholder="Schreibe deinen Kommentar..." type="text">
                    <img onclick="addComment(${i})" src="./assets/png/sent.png" alt="Kommentar hinzüfugen">
                </div>
      </div>
  `;
}
