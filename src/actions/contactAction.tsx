import { Contact } from './types.tsx'; 

export const addContact = (contact: Contact) => ({
  type: 'ADD_CONTACT' as const,
  payload: contact,
});

export const editContact = (contact: Contact) => ({
  type: 'EDIT_CONTACT' as const,
  payload: contact,
});

export const deleteContact = (id: string) => ({
  type: 'DELETE_CONTACT' as const,
  payload: id,
});

export const setSelectedContact = (contact: Contact | null) => ({
  type: 'SET_SELECTED_CONTACT' as const,
  payload: contact,
});
