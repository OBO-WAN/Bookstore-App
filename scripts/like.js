//render function likeOrDislike(i) 

function renderLikeImage(i) {
    let likeImg = document.getElementById(`likeImg${i}`);
  
    if (books[i].liked) {
      likeImg.src = "./assets/png/filledHearth.png";
    } else {
      likeImg.src = "./assets/png/emptyHearth.png";
    }
  }

  function likeOrDislike(i) {
    let likeImg = document.getElementById(`likeImg${i}`);

    if (books[i].liked) {
      books[i].liked = false;
      books[i].likes--;
      likeImg.src = "./assets/png/emptyHearth.png";

    } else {
      books[i].liked = true;
      books[i].likes++;
      likeImg.src = "./assets/png/filledHearth.png";

    }
    saveToLocalStorage();
    render();
  }