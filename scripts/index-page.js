import BandSiteApi from "./band-site-api.js";

document.addEventListener('DOMContentLoaded', async function() {

  const apiKey = "770oedhweuifyuiwefuiwef88fd";
  const bandSiteApi = new BandSiteApi(apiKey);


 let comments;
  try{
    const value = await bandSiteApi.getComments();
    comments = value.data;
  }catch(error){
    throw error;
  }


  const commentForm = document.querySelector('.comment-form');
  const commentList = document.querySelector('.comment-list');

  function clearComments() {
      commentList.innerHTML = '';
  }

  function renderComments() {
      clearComments();
      comments.forEach(comment => {
          addComment(comment.name, comment.date, comment.comment);
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

 async function handleFormSubmit(event) {
      event.preventDefault();
  
      const nameInput = commentForm.querySelector('.comment-form__input');
      const commentTextarea = commentForm.querySelector('.comment-form__textarea');
      const currentDate = new Date().toLocaleDateString('en-US');
      const inputs = commentForm.querySelectorAll('.comment-form__input, .comment-form__textarea');
    
      //error field: still working on it : todo
      inputs.forEach(input => {
        if (!input.checkValidity()) {
          nameInput.classList.add('error');
        } else {
          nameInput.classList.remove('error');
        }
      });

  


   const newComment = {
        name: nameInput.value,
        comment: commentTextarea.value
      };
      
//for adding new comment to api and the we care fetching the value
      try{
       await bandSiteApi.postComment(newComment);
        const updatedComments =  await bandSiteApi.getComments();
        comments = updatedComments.data;
        renderComments();

      }catch(error){
        console.log(error);
      }
  
      nameInput.value = '';
      commentTextarea.value = ''; 
    }
  
    commentForm.addEventListener('submit', handleFormSubmit);
    renderComments();
});

