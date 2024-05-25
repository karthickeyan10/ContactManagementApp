// components/ContactDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../Styles/styles.css';
interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  status: string;
  moreInfo: string;
}

const ContactDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // Retrieve the contacts from localStorage and parse them into an array of Contact objects
  const contacts: Contact[] = JSON.parse(localStorage.getItem('contacts') || '[]');
// Find the contact that matches the id from the URL parameters
  const contact: Contact | undefined = contacts.find(contact => contact.id === id); 
// If no contact is found, return a message indicating that the contact was not found
  if (!contact) {
    return <p>Contact not found</p>;
  }
// If the contact is found, display its details
  return (
    <>
    <h1 className="text-4xl font-bold contactheader">Contact Page</h1>
    <div className="contact-detail">
      <h2>Contact Details</h2>
      <div className="contact-details">
        <p>First Name: {contact.firstName}</p>
        <p>Last Name: {contact.lastName}</p>
        <p>Status: {contact.status}</p>
        <p>More Info: {contact.moreInfo}</p>
      </div>
    </div>
    </>
  );
};

export default ContactDetails;
