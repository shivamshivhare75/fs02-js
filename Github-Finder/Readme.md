# GitHub Finder

GitHub Finder is a web application that allows users to search for GitHub users by their username and view their profiles and repositories. This project was accomplished by using HTML, JavaScript, and Bootstrap for the user interface.

## Implementation

1. **User Interface (UI)**

   - The UI is designed using HTML and Bootstrap to create a simple and responsive layout.
   - The `index.html` file provides the basic structure of the web page, including an input field for entering the username and a "Search" button.
   - Bootstrap classes are used for styling, such as buttons, cards, and badges.

2. **JavaScript Functionality**

   - The core functionality of fetching and displaying user data is implemented using JavaScript.
   - The `script.js` file contains the following JavaScript functionality:

     - Event listener: When the "Search" button is clicked, it triggers a JavaScript function.
     - Fetch API: It makes an asynchronous request to the GitHub API to retrieve user data based on the entered username.
     - Displaying User Data: If the user is found, the fetched data is displayed on the web page using the `showProfile(user)` method from the `UI.js` file.
     - Error Handling: If the user is not found, an error message is displayed using the `showAlert(msg, cls)` method.
     - Clearing Profile: If the input field is empty, the user's profile is cleared from the page using the `clearProfile()` method.

3. **UI Handling (UI.js)**

   - The `UI.js` file contains a class called `UI` responsible for handling the user interface and DOM manipulation.
   - It provides methods for displaying user profiles, clearing profiles, and showing alert messages with different styles.

## Project Structure

- `index.html`: Main HTML file containing the web page structure.
- `ui.js`: JavaScript file handling the user interface and DOM manipulation.
- `script.js`: JavaScript file responsible for making API requests to GitHub and displaying user data.

## How to Use

1. Enter a GitHub username in the input field.
2. Click the "Search" button.
3. The user's profile and repository information will be displayed on the page.



## Author

This project was created by [Niraj Patil].

---

[Live Demo](https://niraj401patil.github.io/Github_Finder/) 
