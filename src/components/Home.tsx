import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/styles.css';

const HomePage: React.FC = () => {
  return (
    <>
    <h1 className="text-4xl font-bold contactheader">Home Page</h1>
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-6">Welcome to Contact Manager</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-500 p-6 rounded-lg">
          <h2 className="text-white text-2xl font-bold mb-4">Contacts</h2>
          <p className="text-white mb-4">"Keep your contacts organized and close at hand."</p>
          <p className="text-white">"Your network is your net worth."</p>
          <Link to="/contacts" className="text-white font-bold mt-6 inline-block bg-white text-blue-500 py-2 px-4 rounded-lg">Manage Contacts</Link>
        </div>
        <div className="bg-green-500 p-6 rounded-lg">
          <h2 className="text-white text-2xl font-bold mb-4">Dashboard</h2>
          <p className="text-white mb-4">"Visualize the world's COVID-19 data."</p>
          <p className="text-white">"Stay informed, stay safe."</p>
          <Link to="/dashboard" className="text-white font-bold mt-6 inline-block bg-white text-green-500 py-2 px-4 rounded-lg">View Dashboard</Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default HomePage;
