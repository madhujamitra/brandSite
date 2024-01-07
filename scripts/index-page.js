document.addEventListener('DOMContentLoaded', function() {
    // Select the form and comment list elements
    const commentForm = document.querySelector('.comment-form');
    const commentList = document.querySelector('.comment-list');
  
    // Function to create and append a new comment to the list
    function addComment(name, date, text) {
      const commentItem = document.createElement('li');
      commentItem.classList.add('comment');
  
      const avatarDiv = document.createElement('div');
      avatarDiv.classList.add('comment__avatar');
      // Here you would set the avatar image if you have one
  
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
  
      // Add the new comment to the top of the comment list
      commentList.insertBefore(commentItem, commentList.firstChild);
    }
  
    // Event listener for the form submission
    commentForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting the traditional way
  
      const nameInput = commentForm.querySelector('.comment-form__input');
      const commentTextarea = commentForm.querySelector('.comment-form__textarea');
  
      // Get current date in a simple format (MM/DD/YYYY)
      const currentDate = new Date().toLocaleDateString('en-US');
  
      // Call the function to add the comment
      addComment(nameInput.value, currentDate, commentTextarea.value);
  
      // Clear the form fields after submission
      nameInput.value = '';
      commentTextarea.value = '';
    });
  });
  