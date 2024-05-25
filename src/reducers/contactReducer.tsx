interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  status: string;
  moreInfo: string;
}

interface State {
  contacts: Contact[];
  selectedContact: Contact | null;
}
// Define the initial state of the reducer
const initialState: State = {
  // Load contacts from local storage or use an empty array if none are found
  contacts: JSON.parse(localStorage.getItem('contacts') || '[]'),
  // Load the selected contact from local storage or use null if none is found
  selectedContact: JSON.parse(localStorage.getItem('editcontacts') || 'null'),
};
// Define the types of actions that the reducer can handle
type Action =
  | { type: 'ADD_CONTACT'; payload: Contact }
  | { type: 'EDIT_CONTACT'; payload: Contact }
  | { type: 'DELETE_CONTACT'; payload: string };
// Define the reducer function that updates the state based on the action
const contactReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'ADD_CONTACT':
      // Add a new contact to the list of contacts
      const newContactsAdd: Contact[] = [...state.contacts, action.payload];
      localStorage.setItem('contacts', JSON.stringify(newContactsAdd));
      return {
        ...state,
        contacts: newContactsAdd,
      };
    case 'EDIT_CONTACT':
      // Edit an existing contact in the list of contacts
      const editedContacts: Contact[] = state.contacts.map(contact =>
        contact.id === action.payload.id ? action.payload : contact
      );
      localStorage.setItem('editcontacts', JSON.stringify(action.payload));
      localStorage.setItem('contacts', JSON.stringify(editedContacts));
      return {
        ...state,
        contacts: editedContacts,
        selectedContact: null, // Clear selected contact after edit
      };
    case 'DELETE_CONTACT':
      const updatedContacts: Contact[] = state.contacts.filter(contact => contact.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      return {
        ...state,
        contacts: updatedContacts,
      };
    default:
      return state;
  }
};

export default contactReducer;
