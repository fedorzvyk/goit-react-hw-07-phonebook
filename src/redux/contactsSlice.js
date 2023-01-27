import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addTask, deleteTask } from './operations';

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  //   reducers: {
  //     addContact: {
  //       reducer(state, action) {
  //         state.items.push(action.payload);
  //       },
  //     },

  //     deleteContact(state, action) {
  //       // return state.items.filter(task => task.id !== action.payload);
  //       const index = state.items.findIndex(
  //         task => task.id === action.payload.id
  //       );
  //       state.items.splice(index, 1);
  //     },
  //   },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addTask.pending]: handlePending,
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addTask.rejected]: handleRejected,
    [deleteTask.pending]: handlePending,
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteTask.rejected]: handleRejected,
  },
});
//
// export const { addContact, deleteContact } = contactsSlice.actions;
export const getContacts = state => state.contacts;

export const contactsReducer = contactsSlice.reducer;
