# Background Color Changer

This is a simple web application that demonstrates how to create a button in the center of a webpage and change the background color of the page when the button is clicked. The button also has a hover effect that increases its size slightly.

## How It Works

The webpage consists of a single button and uses HTML, CSS, and JavaScript to achieve the desired functionality.

### HTML

The HTML structure is straightforward, containing a `button` element with the text "Change Background Color." This button has an `id` attribute of "colorButton" for easy selection in JavaScript.

### CSS

The styling is applied using inline CSS within the `<style>` tags in the `<head>` section of the HTML. The body of the page is centered using flexbox. The button is styled with a blue background color, white text, and some padding. A transition effect is added to the button for a smooth animation during hover and color change.

### JavaScript

The JavaScript code, placed inside a `<script>` tag at the end of the `<body>` section, adds an event listener to the button. When the button is clicked, a function is called that randomly selects a color from an array of predefined colors and sets the background color of the `body` element to the chosen color. This results in an immediate change of the background color.

## How to Use

1. Download or clone this repository to your local machine.
2. Open the `index.html` file in a web browser.
3. You'll see a button with the text "Change Background Color."
4. Click the button to instantly change the background color of the page to a different color.

Feel free to modify the colors, button styling, or any other aspect of the code to suit your preferences.

