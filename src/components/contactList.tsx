import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, editContact } from '../actions/contactAction.tsx';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/styles.css';

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
}

const ContactList: React.FC = () => {
  // Use useDispatch to get the dispatch function from Redux
  const dispatch = useDispatch();
  // Use useNavigate to get the navigate function from React Router
  const navigate = useNavigate();
  // Use useSelector to get the list of contacts from the Redux store
  const contacts: Contact[] = useSelector((state: any) => state.contacts.contacts);
  console.log(contacts)

  // Function to handle the deletion of a contact
  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  // Function to handle the editing of a contact
  const handleEdit = (contact: Contact) => {
    dispatch(editContact(contact));
    navigate('/contact/create');
  };

  return (
    <>
      <h1 className="text-4xl font-bold contactheader">Contact Page</h1>
      <Link to="/contact/create" className="create-contact-link">Create Contact</Link>
      <div className="contact-list-container">
        <div className="contact-items">
          {contacts.length > 0 ? (
            contacts.map(contact => (
              <div key={contact.id} className="contact-item">
                <img src="https://www.finlight.fi/wp-content/uploads/2020/11/pict-customer-male-ivr-people-vector-stencils-library.png-diagram-flowchart-example.png" alt="Customer" />
                <Link to={`/contacts/${contact.id}`}>
                  <p>{contact.firstName} {contact.lastName}</p>
                </Link>
                <div>
                  <button className="edit-btn" onClick={() => handleEdit(contact)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(contact.id)}>Delete</button>
                </div>
              </div>
            ))
          ) : (
            <p>No contacts available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactList;
