import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://642dfe948ca0fe3352c6ee12.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',

    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            console.log(response);
            console.log(response.data);

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({name, number}, thunkAPI) => {
        // const { name, number} = data; - this is contact
        try {
            const response = await axios.post('/contacts', {name, number});
            return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);