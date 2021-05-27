import { createSlice } from "@reduxjs/toolkit";

const initialContactsState = {
  contacts: [],
  isLoading: false,
  filter: "",
  error: null,
};

const { actions, reducer } = createSlice({
  name: "contacts",
  initialState: initialContactsState,
  reducers: {
    addContactSuccess: (state, { payload }) => {
      state.contacts = [...state.contacts, payload];
      state.isLoading = false;
      state.error = null;
    },
    addContactRequest: (state) => {
      state.isLoading = true;
    },
    addContactError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    deleteContactSuccess: (state, { payload }) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== payload
      );
      state.isLoading = false;
      state.error = null;
    },
    deleteContactRequest: (state) => {
      state.isLoading = true;
    },
    deleteContactError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    downloadContactsSuccess: (state, { payload }) => {
      state.contacts = payload;
      state.isLoading = false;
      state.error = null;
    },
    downloadContactsRequest: (state) => {
      state.isLoading = true;
    },
    downloadContactsError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export default { actions, reducer };
