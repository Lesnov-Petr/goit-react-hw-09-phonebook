import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const serviceAPI = {
  registerQuery(credential) {
    return axios.post("/users/signup", credential);
  },

  loginQuery(credential) {
    return axios.post("/users/login", credential);
  },

  logoutQuery() {
    return axios.post("/users/logout");
  },

  getCurrentUser() {
    return axios.get("/users/current");
  },

  contactsQuery() {
    return axios.get("/contacts");
  },

  addContactQuery(payload) {
    return axios.post("/contacts", payload);
  },

  deleteContactQuery(id) {
    return axios.delete(`/contacts/${id}`);
  },
};

export default serviceAPI;
