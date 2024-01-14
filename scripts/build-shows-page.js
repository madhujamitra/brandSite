import { showValue } from "./api-data.js";

 
document.addEventListener('DOMContentLoaded', function() {



//for heading shows
const showsListingsContainer = document.querySelector('.shows__listings');
const showsTitle = document.createElement('h3');
  showsTitle.classList.add('shows__listings__title');
  showsTitle.textContent = 'Shows';
  showsListingsContainer.insertBefore(showsTitle, showsListingsContainer.firstChild);

  //table for content

  const showsListContainer = document.querySelector('.shows__listings__list');

  //for heading
  const addHeaderRowToDom = () => {
    const headerRowEl = document.createElement('li');
    headerRowEl.classList.add('shows__listings__items');

    // Create and append the header elements 
    const headerDateEl = document.createElement('div');
    headerDateEl.classList.add('shows__listings__date', 'shows__listings__header-date');
    headerDateEl.textContent = 'DATE';

    const headerVenueEl = document.createElement('div');
    headerVenueEl.classList.add('shows__listings__venue', 'shows__listings__header-venue');
    headerVenueEl.textContent = 'VENUE';

    const headerLocationEl = document.createElement('div');
    headerLocationEl.classList.add('shows__listings__location', 'shows__listings__header-location');
    headerLocationEl.textContent = 'LOCATION';

    headerRowEl.appendChild(headerDateEl);
    headerRowEl.appendChild(headerVenueEl);
    headerRowEl.appendChild(headerLocationEl);

    showsListContainer.appendChild(headerRowEl);
  };

  //for the table

  const addShowToDom = (show, container) => {
    const showEl = document.createElement('li');
    showEl.classList.add('shows__listings__items');

    const showDateElheader = document.createElement('div');
    const showVenueElheader = document.createElement('div');
    const showLocationElheader = document.createElement('div');
    const showDateEl = document.createElement('div');
    const showVenueEl = document.createElement('div');
    const showLocationEl = document.createElement('div');
    const ticketLinkEl = document.createElement('a');
    

    showDateElheader.classList.add('shows__listings__date' ,'shows__listings__header-date', 'mobile--header');
    showVenueElheader.classList.add('shows__listings__venue','shows__listings__header-venue','mobile--header');
    showLocationElheader.classList.add('shows__listings__location' , 'shows__listings__header-location','mobile--header');

    showDateEl.classList.add('shows__listings__date');
    showVenueEl.classList.add('shows__listings__venue');
    showLocationEl.classList.add('shows__listings__location');
    ticketLinkEl.classList.add('shows__listings__ticket-link');


    showDateElheader.textContent = 'DATE';
    showVenueElheader.textContent = 'VENUE';
    showLocationElheader.textContent = 'LOCATION';
    
    showDateEl.textContent = show.date;
    showVenueEl.textContent = show.place;
    showLocationEl.textContent = show.location;
    ticketLinkEl.textContent = 'BUY TICKETS';
    ticketLinkEl.href = '#';
    

    showEl.appendChild(showDateElheader);
    showEl.appendChild(showDateEl);
    showEl.appendChild(showVenueElheader);
    showEl.appendChild(showVenueEl);
    showEl.appendChild(showLocationElheader);
    showEl.appendChild(showLocationEl);
    showEl.appendChild(ticketLinkEl);

    showEl.addEventListener('click', () => {
    
      const activeShowEls = container.querySelectorAll('.shows__listings__items--active');
      activeShowEls.forEach((el) => {
        
        el.classList.remove('shows__listings__items--active');
      });

      showEl.classList.add('shows__listings__items--active');
    });
    
    container.appendChild(showEl);
  }
//call the value here using asyn and converting intion async function.
  const buildShowsList = (showsArray) => {
   
    while (showsListContainer.children.length > 1) {
      showsListContainer.removeChild(showsListContainer.lastChild);
    }
   
    showsArray.forEach((show) => {
      addShowToDom(show, showsListContainer);
    });
  }
  // // heading in table
  // addHeaderRowToDom();
  // //  shows list
  //  buildShowsList(shows);

  async function loadAndDisplayShows() {
    try {
        const showsData = await showValue(); 
        buildShowsList(showsData); 
    } catch (error) {
        console.error('Error fetching show data:', error);
        if (error.response) {
            console.error(error.response.data);
            console.error(error.response.status);
            console.error(error.response.headers);
        } else if (error.request) {
            
        } else {
           
            console.error('Error', error.message);
        }
    }
}


loadAndDisplayShows();


addHeaderRowToDom();
});

