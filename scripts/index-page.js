
document.addEventListener('DOMContentLoaded', function() {

  const comments = [
      {
        name: "Connor Walton",
        date: "02/17/2021",
        content: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
      },
      {
        name: "Emilie Beach",
        date: "01/09/2021",
        content: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
      },
      {
        name: "Miles Acosta",
        date: "12/20/2020",
        content: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
      }
    ];
 
  const commentForm = document.querySelector('.comment-form');
  const commentList = document.querySelector('.comment-list');

  function clearComments() {
      commentList.innerHTML = '';
  }

  function renderComments() {
      clearComments();
      comments.forEach(comment => {
          addComment(comment.name, comment.date, comment.content);
      });
  }

  function addComment(name, date, text) {
    const commentItem = document.createElement('li');
    commentItem.classList.add('comment');

    const avatarDiv = document.createElement('div');
    avatarDiv.classList.add('comment__avatar');
   

    const bodyDiv = document.createElement('div');
    bodyDiv.classList.add('comment__body');

    const nameDateDiv = document.createElement('div');
    nameDateDiv.classList.add('comment__name-date');

    const nameStrong = document.createElement('strong');
    nameStrong.classList.add('comment__name');
    nameStrong.textContent = name;

    const dateSpan = document.createElement('span');
    dateSpan.classList.add('comment__date');
    dateSpan.textContent = date;

    const textP = document.createElement('p');
    textP.classList.add('comment__text');
    textP.textContent = text;

    // Assemble the comment
    nameDateDiv.appendChild(nameStrong);
    nameDateDiv.appendChild(dateSpan);

    bodyDiv.appendChild(nameDateDiv);
    bodyDiv.appendChild(textP);

    commentItem.appendChild(avatarDiv);
    commentItem.appendChild(bodyDiv);

    commentList.insertBefore(commentItem, commentList.firstChild);
  }

  function handleFormSubmit(event) {
      event.preventDefault();
  
      const nameInput = commentForm.querySelector('.comment-form__input');
      const commentTextarea = commentForm.querySelector('.comment-form__textarea');
      const currentDate = new Date().toLocaleDateString('en-US');
      const inputs = commentForm.querySelectorAll('.comment-form__input, .comment-form__textarea');
//error frild: still working on it : todo
      inputs.forEach(input => {
        if (input.required && input.value.trim() === '') {
         
          input.classList.add('error');
        } else {
         
          input.classList.remove('error');
        }
      });


   
      const newComment = {
        name: nameInput.value,
        date: currentDate,
        content: commentTextarea.value
      };
  
      comments.push(newComment);
      
      nameInput.value = '';
      commentTextarea.value = '';
  
 
      renderComments();
    }
    
  
    commentForm.addEventListener('submit', handleFormSubmit);
  
  
    renderComments();
});
