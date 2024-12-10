document.addEventListener("DOMContentLoaded", function () {
    // Fetch the navbar
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;

            // Toggler icon switching
            const toggler = document.querySelector('.navbar-toggler');
            if (toggler) {
                toggler.addEventListener('click', function () {
                    const icon = this.querySelector('.navbar-toggler-icon');
                    if (!icon) return; // Ensure icon exists

                    if (this.classList.contains('toggled')) {
                        icon.innerHTML = '<i class="bx bx-menu bx-lg"></i>'; // Hamburger icon
                    } else {
                        icon.innerHTML = '<i class="bx bx-x bx-lg"></i>'; // X icon
                    }
                    this.classList.toggle('toggled');
                });
            }

            // Detect the current page
            const currentPage = document.body.getAttribute("data-page");

            if (currentPage === "otherPage") {
                // Remove the collapsible menu
                const collapsibleMenu = document.querySelector('.navbar-toggler-icon');
                if (collapsibleMenu) {
                    collapsibleMenu.remove();
                }

                // Remove all nav-link elements
                document.querySelectorAll('.nav-link').forEach(link => link.remove());

                // Remove the menu-button
                const menuButton = document.querySelector('.menu-button');
                if (menuButton) menuButton.remove();

                // Replace the Logo with a Home icon
                const navbarBrand = document.querySelector('.navbar-brand');
                if (navbarBrand) navbarBrand.innerHTML = '<i class="bx bxs-home bx-md"></i>';
            }
        })
        .catch(error => console.error("Error loading navbar:", error));
});
