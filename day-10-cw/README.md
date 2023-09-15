# Shape's and Background colour Changing Web Page

This project demonstrates an interactive web page where a circle in the center of the page contains different shapes like  pentagon, square, and hexagon. Users can change the background color of the circle and switch between various shapes using buttons.

## How It Works

### HTML
- The main structure is defined in `index.html`, consisting of a circle container, an inner shape container, and two buttons.

### CSS (styles.css)
- Styles are defined in `styles.css` to visually present the circle and inner shapes.
- The existing circle and inner shape styles are retained, and styles for new shapes like pentagon, heptagon, hexagon, and triangle are added.
  
### JavaScript (script.js)
- The JavaScript file, `script.js`, manages the interactivity of the webpage.
- `circle` and `innerShape` are accessed using `getElementById()` for manipulation.
- An array `colors` holds different background colors for the circle.
- The `changeColorBtn` button's click event changes the circle's background color using the `currentColorIndex` variable to cycle through colors.

- An array `shapes` is defined with class names for the shapes.
- The `changeShapeBtn` button's click event changes the inner shape class to a randomly selected class from the `shapes` array, effectively changing the shape.

- The initial shape is set using the `innerShape.className`.

## Usage

1. Clone this repository to your local machine.
2. Open `index.html` in your web browser.

## Customize

- You can customize the colors, sizes, and positions of the shapes by modifying the CSS in `styles.css`.
- To add more shapes, expand the `shapes` array in `script.js` and define corresponding CSS styles.
