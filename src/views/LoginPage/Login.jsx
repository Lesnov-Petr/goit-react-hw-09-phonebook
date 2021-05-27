import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import { NavLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  login: {
    width: 400,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  registerLink: {
    color: "blue",
    textDecoration: "none",
    "&:hover": { textDecoration: "underline" },
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email, password };
    dispatch(authOperations.login(payload, props));
    setEmail("");
    setPassword("");
  };
  return (
    <div className={classes.login}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <h1> Sing In</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          value={email}
          autoComplete="email"
          autoFocus
          onChange={handleChangeEmail}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          value={password}
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={handleChangePassword}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>
      </form>
      <NavLink to="/register" className={classes.registerLink}>
        Don't have an account? Sign Up
      </NavLink>
    </div>
  );
};

export default Login;
