# ASCII Code Viewer

This simple web page demonstrates how to display the ASCII code of a key when it is pressed. The application is built using HTML, CSS, and JavaScript. It features a user-friendly interface with centered content, a clear label, and dynamic result display.

## How It Works

1. Users open the web page and see a label instructing them to press any key.
2. When a key is pressed, the JavaScript code captures the keydown event and retrieves the pressed key's ASCII code.
3. The ASCII code is then dynamically displayed below the label, indicating which key was pressed and its corresponding value.

## JavaScript Functionality

The JavaScript code (`script.js`) is responsible for the core functionality:

- The event listener attached to the `document` object listens for keydown events globally.
- When a key is pressed, the `keydown` event is triggered.
- The `keyPressed` variable holds the value of the pressed key.
- The `asciiCode` variable holds the ASCII code of the pressed key.
- The result is displayed in the HTML by updating the content of the `resultDiv` element using `textContent`.

## Styling

The CSS code (`styles.css`) ensures that the content is centered and styled appropriately:

- The `body` element is set to flex layout to center the content.
- The `page-container` class styles the container with a light background, padding, and rounded corners.
- Font sizes and margins are adjusted for better readability.

## How to Use

1. Open the `index.html` file in a web browser.
2. Follow the instructions to press any key.
3. Observe the displayed result showing the pressed key and its ASCII code.

---

