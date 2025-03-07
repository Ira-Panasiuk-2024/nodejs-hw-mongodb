import { Router } from 'express';

import express from 'express';

import {
  getAllContactsController,
  getContactByIdController,
  deleteContactController,
  createContactController,
  replaceContactController,
  updateContactController,
} from '../controllers/contacts.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

const jsonParser = express.json();

router.get('/contacts', ctrlWrapper(getAllContactsController));

router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

router.post('/contacts', jsonParser, ctrlWrapper(createContactController));

router.put('/contacts/:contactId', jsonParser, ctrlWrapper(replaceContactController));

router.patch('/contacts/:contactId', jsonParser, ctrlWrapper(updateContactController));

export default router;
