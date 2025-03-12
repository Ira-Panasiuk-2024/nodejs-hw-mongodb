import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = () => ContactsCollection.find();

export const getContactById = (contactId) =>
  ContactsCollection.findById(contactId);

export const deleteContact = (contactId) =>
  ContactsCollection.findByIdAndDelete(contactId);

export const createContact = (contactData) =>
  ContactsCollection.create(contactData);

export const updateContact = (contactId, contactData) =>
  ContactsCollection.findByIdAndUpdate(contactId, contactData, { new: true });
