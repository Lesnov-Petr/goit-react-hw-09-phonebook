import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from "../../redux/auth";
import { authOperations } from "../../redux/auth";
import avatar from "../../image/minion.jpg";
import Button from "@material-ui/core/Button";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  navigation__list: { display: "flex", alignItems: "center" },
  navigation__link: { color: "white", textDecoration: "none" },
  avatarImg: { width: 30, height: 30, borderRadius: "50%", marginRight: 10 },
  text: { marginRight: 10 },
});

const UserMenu = () => {
  const classes = useStyles();
  const isUserName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authOperations.logout());
  };

  return (
    <div className={classes.navigation__list}>
      <img className={classes.avatarImg} src={avatar} alt="minion" />
      <p className={classes.text}>Welcome, {isUserName}</p>
      <Button
        type="button"
        onClick={handleLogout}
        fullWidth
        variant="contained"
        color="primary"
      >
        <NavLink to="/" className={classes.navigation__link}>
          Logout
        </NavLink>
      </Button>
    </div>
  );
};
export default UserMenu;
