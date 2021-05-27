import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  link: { color: "white", textDecoration: "none" },
});

const AuthNav = () => {
  const classes = useStyles();

  return (
    <div className="navigation__item">
      <Button color="inherit">
        <NavLink to="/login" className={classes.link}>
          Login
        </NavLink>
      </Button>
    </div>
  );
};

export default AuthNav;
