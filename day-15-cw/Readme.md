# Car Pics Generator

This web application allows you to generate random car images and display their descriptions using the Unsplash API. When you click the "Get Car" button, it fetches a random car image from Unsplash and displays it along with a description.

## Functionality

### HTML (index.html)

1. The `index.html` file provides the structure for the web page. It includes:

   - A title.
   - A "Get Car" button.
   - A container to display the car image and description.


### CSS (style.css)

1. The `style.css` file contains styles to improve the appearance of the web page. It includes:

   - Background color adjustments.
   - Button styling with hover effects.
   - Styling for the car image and description.

### JavaScript (script.js)

1. The `script.js` file adds interactivity to the web page. It includes:

   - Event listener on the "Get Car" button that triggers a function when the button is clicked.

   - When the button is clicked:
     - It changes the car image source to a loading spinner (spinner.svg) to indicate that data is being fetched.
     - It makes a fetch request to the Unsplash API to get a random car image.
     - It updates the image source with the fetched car image.
     - It updates the car description with the fetched description.

   - If there is an error during the fetch process:
     - It logs the error to the console.
     - It re-enables the "Get Car" button.
     - It updates the button text to "Get Car" and displays an error message.

## How to Use

1. Clone this repository to your local machine.

2. Ensure you have the following files in your project directory:
   - `index.html`
   - `style.css`
   - `script.js`
   
3. Open `index.html` in a web browser.

4. Click the "Get Car" button to fetch and display a random car image with a description. If there's an error, an error message will be displayed.

5. Enjoy exploring random car images!


