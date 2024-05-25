# Application Name: Contact Management App with Charts and Maps


Description 

   Implement Contact Management Page:
      1)Create a form component for adding new contacts.
      2)Develop a list component to display all added contacts, each with buttons for viewing, editing, and deleting contact details.
      3)Utilize Redux to store contact data and manage state.
   Implement Charts and Maps Dashboard:
      1)Create a dashboard page with a line graph showing cases fluctuations and a react leaflet map with markers indicating country-wise data.
      2)Fetch data from the provided APIs using React Query for API calls and data management.
      
<!-- ## Setup: -->

## Clone the Repository:

   git clone 
## Install Dependencies:

  cd contactmanagement
  npm install

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode. This command is useful for running test cases that are not directly connected with Firebase.Firebase needed permission.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Deployed App


Using API's

World wide data of cases: https://disease.sh/v3/covid-19/all
Country Specific data of cases: https://disease.sh/v3/covid-19/countries
Graph data for cases with date: https://disease.sh/v3/covid-19/historical/all?lastdays=all

#NOTE

The error message you're seeing indicates that react-scripts is not installed in your project. react-scripts is a set of scripts from the Create React App package that helps in setting up and running a React project.

To resolve this issue, you should install react-scripts. Follow these steps:

Open the  terminal and navigate to the project directory if you're not already there.

Install react-scripts by running the following command:
npm install react-scripts
Start the project again by running:
npm start

Contact Management App with Charts and Maps Project Overview
 Introduction
	This project is a contact management application combined with a COVID-19 dashboard. The app is built using ReactJS, TypeScript, TailwindCSS, React Router v6, and React Query (TanstackQuery). It allows users to manage contacts and view COVID-19 data through interactive charts and maps.
 Objectives
 Contact Management:
	 Add new contacts. Display a list of all contacts. View, edit, and delete contact details. Store contact data using Redux.    
COVID-19 Dashboard:   
	Display a line graph showing case fluctuations. Show a map with markers indicating country-specific COVID-19 data.   

Project Structure 
The main components involved are:
 ContactList: 
Displays a list of contacts with options to view, edit, or delete each contact. ContactForm:
 Provides a form to create or edit contacts.
 ContactDetails: Displays detailed information about a specific contact. Components and Their Functionality 
1. ContactList Component
 Path: components/ContactList.tsx
Display the list of contacts with options to view, edit, and delete them.
 Key Parts: 
useDispatch and useSelector: These hooks are used to interact with the Redux store. useDispatch is used to dispatch actions (e.g., delete or edit a contact), and useSelector is used to select state from the Redux store. 
useNavigate: This hook from React Router is used to programmatically navigate between routes.
 Contacts Mapping: The list of contacts is retrieved from the Redux store and mapped to display each contact with its details, along with Edit and Delete buttons.
2. ContactForm
 Component 
Path: components/ContactForm.tsx
 Purpose:
	 Provide a form to create a new contact or edit an existing contact.
 Key Parts:
 	State Management: useState is used to manage form data.
	 useEffect: Used to pre-fill the form if a contact is being edited.
	 Form Submission: The form handles both adding a new contact and updating an existing one. The handleSubmit function manages form submission and dispatches the appropriate Redux actions.
3. ContactDetails Component 
Path: components/ContactDetails.tsx 
Purpose:
	 Display detailed information about a specific contact.
Key Parts:
 1)useParams: This hook retrieves the id parameter from the URL to identify which contact to display. 
2)useSelector: Used to select the list of contacts from the Redux store. Conditional Rendering: If the contact is not found, a message is displayed. Otherwise, the contact's details are shown

Redux Actions and Reducers Actions
 Path: actions/contactAction.tsx 
Purpose: Define actions for adding, editing, and deleting contacts.
 Key Parts: Action Creators: Functions that return action objects, e.g., addContact, editContact, deleteContact. 
Reducers
 Path: reducers/contactReducer.tsx 
Purpose:
 Handle the state changes based on dispatched actions. 
Key Parts:
 1)Initial State: The initial state of the contacts list.
 2)Reducer Function: A function that updates the state based on the action type. 
Routing
 Path: App.tsx 
Purpose:
 Define routes for the application using React Router. 
Key Parts:
 Routes: Define paths for different components, e.g., /contacts for ContactList, /contacts/:id for ContactDetails, and /contact/create for ContactForm.

Contact Reducer
 The contactReducer manages the state related to contacts, including the list of contacts and the selected contact for editing. It handles actions for adding, editing, and deleting contacts.
Actions The reducer handles three types of actions:
1)ADD_CONTACT: Adds a new contact to the list of contacts.
2)EDIT_CONTACT: Edits an existing contact in the list of contacts.
3)DELETE_CONTACT: Deletes a contact from the list of contacts.

Routes: 
The Routes component from react-router-dom defines the different routes in the application:
 1) /: The home page, rendered by the HomePage component.
 2) /home: Another path for the home page, also rendered by the HomePage component.
 3) /dashboard: The dashboard page, rendered by the Dashboard component. 
4) /contacts: The contact list page, rendered by the ContactList component. 
5) /contacts/:id: The contact details page, rendered by the ContactDetails component, which uses the id parameter.
 6) /contact/create: The contact form page, rendered by the ContactForm component.
Charts and Graphs
Dashboard Component Overview 
This React component, Dashboard, fetches and displays global COVID-19 statistics, country-specific COVID-19 data, and historical COVID-19 data using charts and maps. The component uses react-query to fetch and cache data from APIs, react-leaflet to display maps, and chart.js to create a line chart for historical data.

Fetching Data and Handling API Responses
 The fetchData function is used to fetch data from the specified URL. Here's how it works:
 Async Function:
 The function is defined as async, allowing the use of await to handle asynchronous operations. 
Fetching Data:
 1)const response = await fetch(url);                                                                               ( Fetches the data from the given URL.) 
 2)if (!response.ok) { throw new Error('Network response was not ok'); }: (Checks if the response is OK. If not, it throws an error.)
Return Data: return response.json();: Parses the response as JSON and returns it.
Using react-query 
react-query is used to fetch and cache the data: 
1)Global Data: 
useQuery<WorldData>('worldData', () => fetchData('https://disease.sh/v3/covid-19/all'));: Fetches global COVID-19 statistics.
2) Country Data: 
	useQuery<CountryData[]>('countryData', () => fetchData('https://disease.sh/v3/covid-19/countries'));
(Fetches country-specific COVID-19 statistics.) 
3)Graph Data:
	 useQuery<GraphData>('graphData', () => fetchData('https://disease.sh/v3/covid-19/historical/all?lastdays=all'));
(Fetches historical COVID-19 data.)

IMAGES
HOME PAGE
https://github.com/karthickeyan10/ContactManagementApp/assets/104918292/b5486f46-b1bb-4e29-b8d9-ae369731e91c

CREATING CONTACT
![image](https://github.com/karthickeyan10/ContactManagementApp/assets/104918292/a64489ff-43fa-472e-b995-c148c9e19eb9)

DISPLAY OF ALL CONTACTS
![image](https://github.com/karthickeyan10/ContactManagementApp/assets/104918292/682cf1d6-265b-42d2-9544-4795f26b7145)

EDITING THE CONTACT 
![image](https://github.com/karthickeyan10/ContactManagementApp/assets/104918292/6b3e4f59-016a-46fc-b39d-6ef41fc295be)

Charts And Graphs
![image](https://github.com/karthickeyan10/ContactManagementApp/assets/104918292/9b8b5fe5-8f82-4f97-8518-ecbd9cccb650)
![image](https://github.com/karthickeyan10/ContactManagementApp/assets/104918292/9f1e7164-3519-43c2-9287-565967418073)




