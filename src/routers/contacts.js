import { Router } from 'express';

import express from 'express';

import {
  getAllContactsController,
  getContactByIdController,
  deleteContactController,
  createContactController,
  updateContactController,
} from '../controllers/contacts.js';

import { isValidID } from '../middlewares/isValidID.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';

const router = Router();

const jsonParser = express.json();

router.get('/contacts', ctrlWrapper(getAllContactsController));

router.get(
  '/contacts/:contactId',
  isValidID,
  ctrlWrapper(getContactByIdController),
);

router.delete(
  '/contacts/:contactId',
  isValidID,
  ctrlWrapper(deleteContactController),
);

router.post(
  '/contacts',
  jsonParser,
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

router.patch(
  '/contacts/:contactId',
  isValidID,
  jsonParser,
  validateBody(updateContactSchema),
  ctrlWrapper(updateContactController),
);

export default router;
