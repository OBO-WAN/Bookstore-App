// Comment Section 

function renderCommentSection(book, i) {
    let commentContainer = document.getElementById(`commentatorID${i}`);
  
    for (let j = 0; j < book.comments.length; j++) {
      const commentArea = book.comments[j];
      commentContainer.innerHTML += `<div class="area-comments"><span class="commentators">${commentArea.name}</span>:     <span class="comments">${commentArea.comment}</span></div>`;
    }
  }

  function addComment(i) {   //to be rendered ...
    let newComment = document.getElementById(`inputField${i}`);
    if (newComment.value.length == 0) {
      alert("Bitte Kommentar eingeben");
    } else {
      books[i].comments.push({
        name: "Unbekannte User ",
        comment: newComment.value,
      });
      newComment.value = "";
      render();
    }
  }

  function renderEmptyBook(book, i) {
    if (book.comments.length == 0) {
      let emptyComment = document.getElementById(`commentID${i}`);
      emptyComment.innerHTML = `<span>Keine Kommentare</span>`;
    }
  }