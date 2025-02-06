# Login Form with Dynamic Styling

## Overview

This project is a modern, interactive login form designed with a focus on both aesthetic appeal and responsiveness. It leverages advanced CSS techniques—including glassmorphism, CSS variables, and keyframe animations—alongside JavaScript-driven interactivity to create a unique user experience. The project not only demonstrates clean, maintainable code practices but also serves as an example of how to integrate dynamic theming with traditional HTML and CSS.

## Features

- **Glassmorphism Design**:  
  Utilizes a semi-transparent, frosted-glass aesthetic that provides depth and visual interest.
- **Animated Gradient Background**:  
  Implements a continuously shifting gradient background that enhances the page's visual appeal without disrupting performance.
- **Responsive Design**:  
  Ensures a seamless user experience across a variety of devices and screen sizes using media queries and flexible layout techniques.
- **Interactive Elements**:  
  Includes hover and focus effects on buttons and inputs, offering intuitive visual feedback during user interactions.
- **Dynamic Theming**:  
  Uses CSS custom properties (`:root`) in conjunction with JavaScript to allow real-time updates to the color scheme without interrupting ongoing CSS animations.
- **Customizable Background Triggers**:  
  The background theme can be updated via a reset button click or by double-clicking anywhere on the body, offering multiple interaction points for enhanced engagement.

## Tech Stack

- **HTML5**:  
  Provides a semantic and accessible structure for the login form.
- **CSS3**:
  - **Glassmorphism & Responsive Design**: Achieved through transparency effects, box-shadows, and media queries.
  - **CSS Variables**: Enable easy and dynamic theming.
  - **Keyframe Animations**: Create smooth transitions for the gradient background.
- **JavaScript (ES6)**:  
  Implements dynamic features such as real-time form validation, event handling for theme updates, and integration with CSS custom properties.
- **Normalize.css**:  
  Ensures consistent styling across different browsers by resetting default CSS styles.

## How to Use

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/login-page.git
   ```

## Tailoring to your preferences

modify the custom properties in the :root section of login.css. For example:

css
:root {
--text-color: #fbf7f7;
--background-color: #252525;
--primary-color: #fbf7f7;
--secondary-color: #f1e9e3;
--accent-color: #df9234;
}
