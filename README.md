# Login Form with Dynamic Styling

## Overview

This project is a modern login form designed with a focus on aesthetic appeal and responsiveness. It incorporates **glassmorphism**, **responsive design**, and **subtle animations** to create an engaging user experience. The form is ideal for showcasing advanced CSS skills while adhering to clean, maintainable code principles.

## Features

- **Glassmorphism Design**: The form uses a semi-transparent, frosted-glass aesthetic.
- **Animated Gradient Background**: A dynamic and visually pleasing gradient animation enhances the overall appeal.
- **Responsive Design**: The layout adjusts seamlessly to various screen sizes, ensuring usability on desktops and mobile devices.
- **Interactive Elements**: Buttons and inputs include hover effects and focus styles for better user interaction.
- **Custom Properties**: CSS variables (`:root`) make the design easily adaptable to different themes.

## Tech Stack

- **HTML5**: For semantic structure.
- **CSS3**: For styling, animations, and responsive design.
  - **CSS Variables**: Enable dynamic theming.
  - **Keyframe Animations**: Provide smooth gradient transitions.
  - **Media Queries**: Ensure responsiveness across devices.
- **Normalize.css**: To standardize styling across browsers.

## How to Use

1. Clone the repository and open the project in your preferred editor.
2. Include `normalize.css` and `login.css` in your project directory.
3. Open the `index.html` file in any modern browser to view the form.

**link**: https://prneiderball.github.io/login-page/

## Customization

To change the theme colors, edit the custom properties in the `:root` section of `login.css`:

```css
:root {
  --text: #fbf7f7;
  --background: #252525;
  --primary: #fbf7f7;
  --secondary: #f1e9e3;
  --accent: #df9234;
}
```
