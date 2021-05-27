import { useSelector } from "react-redux";
import HeadNav from "./HeadNav";
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";
import { authSelectors } from "../../redux/auth";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
}));

const Navigation = () => {
  const classes = useStyles();
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <HeadNav />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
