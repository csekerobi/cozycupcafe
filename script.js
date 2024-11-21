// script to close collapsible navbar
document.addEventListener('click', function (event) {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');
  
    if (
      navbarCollapse.classList.contains('show') &&
      !navbarCollapse.contains(event.target) &&
      !navbarToggler.contains(event.target)
    ) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: true,
      });
      bsCollapse.hide();
    }
  });
  