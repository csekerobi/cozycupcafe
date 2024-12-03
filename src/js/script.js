// script to close collapsible navbar
document.addEventListener('click', function (event) {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');
  
    if (
      navbarCollapse.classList.contains('show') &&
      !navbarCollapse.contains(event.target) &&
      !navbarToggler.contains(event.target)
    ) {
      navbarToggler.click(); // close the menu on outside clicks
    }
  });

  // script for form validation
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // prevent form submission
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name && email && message) {
      alert('Thank you for contacting us!');
      //send form data to a server
    } else {
      alert('Please fill in all fields.');
    }
  });