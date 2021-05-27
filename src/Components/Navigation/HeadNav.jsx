import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from "../../redux/auth";
import { createUseStyles } from "react-jss";
import Typography from "@material-ui/core/Typography";

const useStyles = createUseStyles({
  navigation__list: { display: "flex", listStyle: "none" },
  navigation__item: { marginLeft: 10 },
  navigation__link: { color: "white", textDecoration: "none" },
});

const HeadNav = () => {
  const classes = useStyles();
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <ul className={classes.navigation__list}>
      <li className={classes.navigation__item}>
        <NavLink exact className={classes.navigation__link} to="/">
          <Typography variant="h6">Главная</Typography>
        </NavLink>
      </li>
      {isAuthenticated ? (
        <li className={classes.navigation__item}>
          <NavLink to="/contacts" className={classes.navigation__link}>
            <Typography variant="h6">Контакты</Typography>
          </NavLink>
        </li>
      ) : null}
    </ul>
  );
};

export default HeadNav;
