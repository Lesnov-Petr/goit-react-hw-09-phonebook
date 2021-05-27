import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import Loader from "react-loader-spinner";

const PublicRoute = ({ component: Component, ...rest }) => {
  const isLogged = useSelector(authSelectors.getIsAuthenticated);
  // const isLoading = useSelector(authSelectors.getLoading);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? <Redirect to="/contacts" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
