import serviceAPI from "../../Service/ServiceAPI";
import { contactsReducer } from ".";

const {
  downloadContactsSuccess,
  downloadContactsError,
  downloadContactsRequest,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} = contactsReducer.actions;

export const loadingContacts = () => async (dispatch) => {
  dispatch(downloadContactsRequest());
  try {
    const { data } = await serviceAPI.contactsQuery();
    dispatch(downloadContactsSuccess(data));
  } catch (error) {
    dispatch(downloadContactsError(error.message));
  }
};

export const addContact = (payload) => (dispatch) => {
  dispatch(addContactRequest());
  return serviceAPI
    .addContactQuery(payload)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error.message)));
};

export const delContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());
  serviceAPI
    .deleteContactQuery(id)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => dispatch(deleteContactError(error.message)));
};
