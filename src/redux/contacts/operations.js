import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from 'react-hot-toast';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      // Check if a contact with the same name exists
      const AllContacts = await axios.get("/contacts");
      const contactExists = AllContacts.data.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase());

      if (contactExists) {
        toast.error(`Contact with name: ${newContact.name} already in contact list`);
        return thunkAPI.rejectWithValue(`Contact with name: ${newContact.name} already in contact list`);
      }

      // If no duplicate contact found, proceed to add the new contact
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)
