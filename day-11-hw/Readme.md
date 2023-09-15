# Tip Calculator

This is a simple tip calculator web application built using HTML, CSS, and JavaScript.

## How It Works

1. Users input the bill amount, select the service quality, and specify the number of people sharing the bill.
2. Clicking the "Calculate" button computes the tip amount per person based on the input values.
3. The result is dynamically displayed below the "Calculate" button.

## JavaScript Functionality

The JavaScript code (`script.js`) accomplishes the following:

- Attaches an event listener to the "Calculate" button using the `DOMContentLoaded` event.
- Defines the `calculateTip()` function, which calculates the tip amount based on user inputs.
- Validates input values to ensure they are valid numbers.
- Formats the calculated tip amount to two decimal places.
- Updates the HTML to display the calculated tip amount.

## Styling

The CSS code (`styles.css`) handles the styling:

- Uses flexbox for centered vertical and horizontal layout.
- Applies a light background color and shadow to the calculator container.
- Styles label-input pairs to appear on the same line.
- Enhances the "Calculate" button with bold blue color and hover effect.

## How to Use

1. Open the `index.html` file in a web browser.
2. Input the bill amount, select service quality, and enter the number of people.
3. Click the "Calculate" button to see the calculated tip amount per person.

