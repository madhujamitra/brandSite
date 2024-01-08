const shows = [
    { date: 'Mon Sept 06 2021', venue: 'Ronald Lane', location: 'San Francisco, CA' },
    { date: 'Tue Sept 21 2021', venue: 'Pier 3 East', location: 'San Francisco, CA' },
    { date: 'Fri Oct 15 2021', venue: 'View Lounge', location: 'San Francisco, CA' },
    { date: 'Sat Nov 06 2021', venue: 'Hyatt Agency', location: 'San Francisco, CA' },
    { date: 'Fri Nov 26 2021', venue: 'Moscow Center', location: 'San Francisco, CA' },
    { date: 'Wed Dec 14 2021', venue: 'Press Club', location: 'San Francisco, CA' }
  ];
  
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
    
    const showDateEl = document.createElement('div');
    const showVenueEl = document.createElement('div');
    const showLocationEl = document.createElement('div');
    const ticketLinkEl = document.createElement('a');
    
    showDateEl.classList.add('shows__listings__date');
    showVenueEl.classList.add('shows__listings__venue');
    showLocationEl.classList.add('shows__listings__location');
    ticketLinkEl.classList.add('shows__listings__ticket-link');
    
    showDateEl.textContent = show.date;
    showVenueEl.textContent = show.venue;
    showLocationEl.textContent = show.location;
    ticketLinkEl.textContent = 'BUY TICKETS';
    ticketLinkEl.href = '#';
    
    showEl.appendChild(showDateEl);
    showEl.appendChild(showVenueEl);
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

  const buildShowsList = (showsArray) => {
   
    while (showsListContainer.children.length > 1) {
      showsListContainer.removeChild(showsListContainer.lastChild);
    }
   
    showsArray.forEach((show) => {
      addShowToDom(show, showsListContainer);
    });
  }
  // heading in table
  addHeaderRowToDom();
  //  shows list
  buildShowsList(shows);
});
