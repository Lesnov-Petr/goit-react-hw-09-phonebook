import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import Loader from "react-loader-spinner";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogged = useSelector(authSelectors.getIsAuthenticated);
  // const isLoading = useSelector(authSelectors.getLoading);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
