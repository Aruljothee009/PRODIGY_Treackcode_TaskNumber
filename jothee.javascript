// Get the header element
const header = document.querySelector('header');

// Add an event listener for the scroll event
window.addEventListener('scroll', () => {
  // Check if the user has scrolled down the page
  if (window.pageYOffset > 0) {
    // Add the 'scrolled' class to the header
    header.classList.add('scrolled');
  } else {
    // Remove the 'scrolled' class from the header
    header.classList.remove('scrolled');
  }
});
