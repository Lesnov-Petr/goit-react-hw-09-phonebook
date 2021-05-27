import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  register: {
    width: 400,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPaswword] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { name, email, password };
    dispatch(authOperations.register(payload, props));
    setName("");
    setEmail("");
    setPaswword("");
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPaswword(e.target.value);
  };

  return (
    <div className={classes.register}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          autoComplete="fname"
          name="Name"
          variant="outlined"
          required
          fullWidth
          id="Name"
          label="Name"
          value={name}
          autoFocus
          onChange={handleChangeName}
        />
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
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Register;
