# Cozy Café Website

## Overview

The **Cozy Café Website** is a responsive and modern website designed for a fictional café. The project demonstrates reusable components like a **navbar** and **footer** for easy maintainability across multiple pages. The site is built with HTML, CSS, Bootstrap, and JavaScript.

## Features

- **Responsive Design:** Optimized for mobile, tablet, and desktop views.
- **Reusable Components:**
  - Navbar and footer are dynamically loaded from external files using JavaScript.
- **Bootstrap Integration:** Utilizes Bootstrap for layout and styling.

## File Structure

### HTML Files

- `index.html`: Home page with a hero section, menu categories, about, team, and reviews sections.
- `menu.html`: Menu page showcasing the café’s offerings with carousel sliders.
- `contact.html`: Contact page with a form to submit inquiries.
- `navbar.html`: Contains the HTML structure for the navigation bar.
- `footer.html`: Contains the HTML structure for the footer.

### CSS Files

- `style.css`: Custom CSS for styling the website, including reusable variables, typography, and custom components.

### JavaScript Files

- `navbar.js`: Dynamically loads the `navbar.html` into pages.
- `footer.js`: Dynamically loads the `footer.html` into pages.
- `script.js`: Contains miscellaneous scripts, including functionality for auto-closing the navbar when clicking outside.

### Assets

- Images: Product and placeholder images for menu items, team members, and other sections.

## Libraries and Frameworks

- [Bootstrap 5.3](https://getbootstrap.com/): For responsive grid layout and UI components.
- [Boxicons](https://boxicons.com/): For icons used in navigation and footer.
- [Google Fonts](https://fonts.google.com/): For typography.

## Acknowledgments

- **Bootstrap Team:** For their powerful CSS framework.
- **Boxicons:** For the free and elegant icons.
- **Unsplash/Pexels:** Placeholder images for demonstration purposes.

## Future Improvements

1. **More Reusable Elements**:
   - Convert menu cards on the `menu.html` page into reusable components for easier management and scalability.
   - Apply a similar approach to the review section for creating consistent and reusable card layouts.
2. **Navbar Enhancements**:
   - Modify the collapsible navbar toggler to display an "X" icon when the menu is expanded, enhancing usability and aesthetics.

## License

This project is open-source and free to use for educational or personal purposes.
