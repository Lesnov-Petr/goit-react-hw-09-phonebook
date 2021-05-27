import Login from "../views/LoginPage";
import Register from "../views/RegisterPage";
import Contacts from "../views/ContactsPage";

const routes = [
  {
    path: "/login",
    component: Login,
    isProtected: false,
  },
  {
    path: "/register",
    component: Register,
    isProtected: false,
  },
  {
    path: "/contacts",
    component: Contacts,
    isProtected: true,
  },
];

export default routes;
