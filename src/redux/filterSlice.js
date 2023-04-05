import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {value: ''},
    reducers: {
        setFilter(state, action) {
            console.log('filterSlice filterContacts state:', state);
            console.log('filterSlice filterContacts state.value:', state.value);
            console.log('filterSlice filterContacts action:', action);
            console.log('filterSlice filterContacts action.payload:', action.payload);

            state.value = action.payload;
            // return (state = action.payload);
        },
    },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;