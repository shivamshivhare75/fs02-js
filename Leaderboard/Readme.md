# Leaderboard Project

## Description

This project is a leaderboard where you can add players with their details and scores. The goal was to create a user interface (UI) that allows adding players in a single row and displaying their details on the leaderboard.

## Implementation

### HTML (index.html)

- The main container (`main-container`) contains a form for adding players and a leaderboard display.
- The form consists of text inputs for First Name, Last Name, Country, and a numeric input for Player Score.
- The "Add Player" button is placed in the same row as the text inputs.
- Player details are displayed in a single row on the leaderboard below the form.

### CSS (style.css)

- The CSS styles define the layout and appearance of the UI.
- Styles are applied to create a clean and user-friendly interface.
- Elements are styled to ensure that the button appears in the same row as the text inputs.

### JavaScript (main.js)

- JavaScript is used to handle form submission, adding players to the leaderboard, and updating scores.
- Event listeners are set up to listen for form submissions and button clicks.
- Player details are dynamically created and added to the leaderboard.
- Players can be removed from the leaderboard, and scores can be incremented or decremented using buttons.
- The leaderboard is sorted based on player scores to display the highest scorer at the top.

## Usage

1. Enter the player's First Name, Last Name, Country, and Player Score in the respective text inputs.
2. Click the "Add Player" button to add the player to the leaderboard.
3. Player details will be displayed in a single row on the leaderboard.
4. Use the buttons on each player's row to remove the player, increment, or decrement their score.
5. The leaderboard is automatically sorted based on player scores with the highest scorer at the top.

## Credits

- This project was created with HTML, CSS, and JavaScript.
- The UI design was implemented using CSS styles.
- JavaScript functionality was used to handle form submission, leaderboard management, and sorting.

