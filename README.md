# josn-api-curd-javacript
The "json-api-crud-handler" is a repository on GitHub that offers a simplified way to handle basic operations (Create, Read, Update, Delete) on JSON APIs and Perfom Sorting for Each items. It makes working with JSON-based APIs easier,  allowing developers to focus more on the core functionality of their applications.
The "json-api-crud-handler" is a repository on GitHub that offers a simplified way to handle basic operations (Create, Read, Update, Delete) on JSON APIs and Perfom Sorting for Each items. It makes working with JSON-based APIs easier, allowing developers to focus more on the core functionality of their applications. GitHub README This repository contains a JavaScript code file that implements a user management system using the JSONPlaceholder API. The code allows users to perform various operations such as searching, sorting, adding, editing, and deleting user data.

Code Overview The code file main.js contains the following functions and variables:

Variables:

tableData: Represents the HTML element that displays the user data table. searchBar: Represents the HTML input element for the search functionality. searchBtn: Represents the HTML button element to trigger the search functionality. sortButton: Represents the HTML button element to trigger the sorting functionality. addPostForm: Represents the HTML form element for adding new user data. updateBtn: Represents the HTML button element to update user data. name, email, phone, username: Represent the HTML input elements for capturing user data. Constants:

url: Represents the URL of the JSONPlaceholder API endpoint used to fetch user data. Variables:

userData: An array that holds the fetched user data from the API. sortedData: An array used to hold a sorted version of the user data. Event Listeners:

sortButton: Listens for a click event and triggers the sortTable function. searchBtn: Listens for a click event and triggers the search functionality. addPostForm: Listens for the form submission event and triggers the function to add new user data. tableData: Listens for click events on the table rows for deleting or editing user data. updateBtn: Listens for a click event and triggers the function to update user data. Functions:

sortTable: Sorts the user data in ascending order based on the user's name. displayUserData: Renders the user data in the HTML table. loadUser: Fetches the user data from the API, displays it, and handles the delete and edit operations. Usage To use this code, follow these steps:

Clone the repository to your local machine. Open the main.js file and add it to your project. Link the HTML elements (table, search bar, buttons, form, etc.) with the corresponding IDs mentioned in the code. Ensure you have an internet connection and that the JSONPlaceholder API is accessible. Execute the code in your preferred JavaScript environment (e.g., web browser console, Node.js, etc.). The user data table will be displayed, and you can perform various operations such as searching, sorting, adding, editing, and deleting user data. Contact For any questions or inquiries, please feel free to contact us:

Name: Divyansh Singh Bhati Email: diviyanshbhati7774@gmail.com

Please note that you may need to modify the code to fit your specific requirements, such as handling error cases, implementing authentication, or customizing the user interface.

Dependencies This code does not have any external dependencies.

License The code in this repository is available under the MIT License.

Acknowledgements This code is based on the JSONPlaceholder API and serves as a simple demonstration of interacting with a RESTful API to manage user data.
