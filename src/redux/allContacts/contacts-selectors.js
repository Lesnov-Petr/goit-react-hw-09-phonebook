import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts.contacts;
const getfilterContacts = (state) => state.filterContacts;
const getLoading = (state) => state.contacts.isLoading;

const getIsFilterContacts = createSelector(
  [getContacts, getfilterContacts],
  (contacts, inputFilter) => {
    const normolizeInputFilter = inputFilter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(normolizeInputFilter)
    );
  }
);

export default {
  getContacts,
  getfilterContacts,
  getLoading,
  getIsFilterContacts,
};
