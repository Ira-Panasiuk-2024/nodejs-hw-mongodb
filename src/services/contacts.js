import { ContactsCollection } from '../db/models/contacts.js';

// export const getAllContacts = async () => {
//   try {
//     const contacts = await ContactsCollection.find();
//     return contacts;
//   } catch (error) {
//     console.error('Error getting contacts:', error);
//     throw error;
//   }
// };

// export const getContactById = async (contactId) => {
//   try {
//     const contact = await ContactsCollection.findById(contactId);
//     if (!contact) {
//       console.log(`Contact with id ${contactId} not found in database`);
//       return null;
//     }
//     return contact;
//   } catch (error) {
//     console.error('Error getting contact:', error);
//     throw error;
//   }
// };

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};

export const deleteContact = async (contactId) => {
  const contact = await ContactsCollection.findOneAndDelete({
    _id: contactId, 
  });

  return contact;
};

export const createContact = async (payload) => {
  const contact = await ContactsCollection.create(payload);
  return contact;
};

export const replaceContact = async (contactId, payload, options = {}) => {
  const rawResult = await ContactsCollection.findOneAndUpdate(
    { _id: contactId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    contact: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};

export const updateContact = async (contactId, payload) => {
  const result = await replaceContact(contactId, payload, {});

  if (!result) return null;

  return result.contact;
};
