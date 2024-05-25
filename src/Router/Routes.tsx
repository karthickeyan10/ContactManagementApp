import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar.tsx';
import ContactList from '../components/contactList.tsx';
import ContactForm from '../components/contactForm.tsx';
import ContactDetails from '../components/contactDetail.tsx';
import Dashboard from '../components/chartsandgraph.tsx';
import HomePage from '../components/Home.tsx';

const App: React.FC = () => {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contacts" element={<ContactList />} />
          <Route path="/contacts/:id" element={<ContactDetails />} />
          <Route path="/contact/create" element={<ContactForm />} />
        </Routes>
      </div>
  );
};

export default App;
