import { Route, Switch } from "react-router-dom";
import Navigation from "./Components/Navigation";
import "./sass/index.scss";
import routes from "./routes/routes";
import { authOperations } from "./redux/auth";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import PublicRoute from "./Components/PublicRoute/PublicRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./views/HomePage";
import Login from "./views/LoginPage";
import Register from "./views/RegisterPage";
import Contacts from "./views/ContactsPage";
import { authSelectors } from "./redux/auth";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getUser());
  }, [dispatch]);

  const isLogged = useSelector(authSelectors.getIsAuthenticated);

  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <PublicRoute path="/login" component={Login} isProtected />
        <PublicRoute path="/register" component={Register} isProtected />
        <PrivateRoute path="/contacts" component={Contacts} isProtected /> */}

        {routes.map(({ path, exact, isProtected, component: Component }) =>
          isProtected ? (
            <PrivateRoute
              key={path}
              path={path}
              exact={exact}
              component={Component}
            />
          ) : (
            <PublicRoute
              key={path}
              path={path}
              exact={exact}
              component={Component}
            />
          )
        )}
      </Switch>
    </div>
  );
};

export default App;
