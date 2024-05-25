import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, editContact } from '../actions/contactAction.tsx';
import { useNavigate } from 'react-router-dom';
import '../Styles/styles.css';
// Define the structure of the form data using an interface
interface FormData {
  firstName: string;
  lastName: string;
  status: string;
  moreInfo: string;
  id?: string;
}

const ContactForm: React.FC = () => {
  const dispatch = useDispatch();
  // Retrieve the selected contact from localStorage
  const selectedContact: FormData | null = JSON.parse(localStorage.getItem('editcontacts') || 'null');
  // Retrieve the contacts from the Redux store
  const contacts: FormData[] = useSelector((state: any) => state.contacts.contacts);
  // Define the state for the form data
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    status: 'active',
    moreInfo: '',
    id: ''
  });
// useEffect to pre-fill the form if a contact is selected for editing
  useEffect(() => {
    if (selectedContact) {
      setFormData({
        firstName: selectedContact.firstName,
        lastName: selectedContact.lastName,
        status: selectedContact.status,
        moreInfo: selectedContact.moreInfo,
        id: selectedContact.id
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedContact) {
      const index = contacts.findIndex(contact => contact.id === selectedContact.id);
      const updatedContacts = [
        ...contacts.slice(0, index),
        formData,
        ...contacts.slice(index + 1)
      ];

      // Update local storage with the updated contacts array
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      localStorage.removeItem('editcontacts');
    } else {
      // Dispatch addContact action
      dispatch(addContact({ ...formData, id: Date.now().toString() }));
    }

    // Reset form data after submission
    setFormData({
      firstName: '',
      lastName: '',
      status: 'active',
      moreInfo: ''
    });

    // Navigate to the contacts page
    navigate('/contacts');
  };

  return (
    <>
      <h1 className="text-4xl font-bold contactheader">Contact Page</h1>
      <div className="contact-form-container">
        <h2>{localStorage.getItem('editcontacts') ? 'Edit Contact' : 'Create Contact'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Status:</label>
            <label>
              <input
                type="radio"
                name="status"
                value="active"
                checked={formData.status === 'active'}
                onChange={handleChange}
              /> Active
            </label>
            <label>
              <input
                type="radio"
                name="status"
                value="inactive"
                checked={formData.status === 'inactive'}
                onChange={handleChange}
              /> Inactive
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="moreInfo">More Information:</label>
            <textarea
              id="moreInfo"
              name="moreInfo"
              value={formData.moreInfo}
              onChange={handleChange}
            />
          </div>
          <button type="submit">{selectedContact ? 'Update' : 'Submit'}</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
