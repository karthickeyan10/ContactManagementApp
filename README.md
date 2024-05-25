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
