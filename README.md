# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- 1. firstly i Created Design also create seprate file for theme
2. started working on text message if question is present that json file then i will get response of that question ==>> for that i used find method
   where find return first match element

3. Storing Previos data : created useState for this and stored all response in this prev State

4.Save Button => frrdBack + on Submit (Dialog Box) => stored in localStoge , using jsonStrigify(prevData) => then eg localStorage.setValue(uuid)

5. used uuid for storing data means every converstion should save with different key
   bcoz while accessing i should get that specific conversation

6. sidebar : i access key and value from Local Storage to show how box stored in useState and map on that intial value means every time new key will get update then new converstion Box will get add in sideBar

7 . lastly part on click of sideBar Box any single grid : i should get key and value of that specific key :: ==> fot that i wrote one function on Click of That specific card or coversation :
passed on Paramenter as key

const handleItemClick = (key) => {
const data = JSON.parse(localStorage.getItem(key));
RecieveLocalStorageData(data, key);
};

and on looping of all card handleItemClick(ele.key)

from this now i can getItem from localStorage

8. conditionally showed if click on sideBar history card then show all data for that specific key || show messeging page else welcome Page -->

Chatbot Application Overview

Design and Theming
Design: Created a comprehensive design for the chatbot interface.
Theme: Developed a separate file to manage and apply the theme.

Message Handling
Text Messages: Implemented functionality to handle user messages by checking against a JSON file. Used the find method to return the first matching question and retrieve its corresponding response.
State Management: Utilized useState to store previous responses and maintain conversation history.

Data Storage
Save Functionality: Added a save button that triggers feedback submission and stores data in localStorage. Used JSON.stringify to serialize previous data and stored it with a unique uuid.
Unique Identification: Each conversation is saved with a unique key to ensure distinct storage and retrieval of data.

Sidebar Functionality
Sidebar: Accessed localStorage to populate the sidebar with conversation history. Used useState to manage and update the sidebar dynamically.
Conversation Selection: Implemented a function to handle clicks on sidebar items. This function retrieves and parses the specific conversation data from localStorage based on the selected key.

Conditional Rendering
Display Logic: Conditioned the display to show either the messaging page for a selected conversation or a welcome page when no specific conversation is selected.
