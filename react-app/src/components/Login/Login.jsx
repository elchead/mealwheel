import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "../TextField/TextField";
import DefaultButton from "../Button/Button";
import Typography from "@material-ui/core/Typography";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../../_actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  Text: {
    color: "white",
  },
}));

export function LoginField(props) {
  const classes = useStyles();
  return (
    <>
      <TextField
        InputProps={{
          className: classes.Text,
        }}
        name="username"
        text="Username"
        onChange={props.onChange}
      />
      <TextField
        InputProps={{
          className: classes.Text,
        }}
        name="password"
        type="password"
        onChange={props.onChange}
        text="Password"
      />
    </>
  );
}

export default function LoginMask() {
  const classes = useStyles();
  const [submitted, setSubmitted] = useState(false);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const { username, password } = inputs;
  const isLoggedIn = useSelector((state) => state.authentication.loggedIn);
  const dispatch = useDispatch();
  const location = useLocation();
  function handleInput(e) {
    const target = e.target;
    setInputs({ ...inputs, [target.name]: target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (username && password) {
      // get return url from location state or default to home page
      const { from } = location.state || { from: { pathname: "/" } };
      dispatch(userActions.login(username, password, from));
    }
  }

  function handleLogout(e) {
    setInputs({});
    setSubmitted(false);
    dispatch(userActions.logout());
  }
  return (
    <>
      {!isLoggedIn ? (
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <LoginField onChange={handleInput}></LoginField>
          {submitted && !username && (
            <div className="invalid-feedback">Username is required</div>
          )}
          {submitted && !password && (
            <div className="invalid-feedback">Password is required</div>
          )}
          <DefaultButton type="submit" text="Login" />
          {/* <LoginButton loggedIn={isLoggedIn}></LoginButton> */}
          <RegisterButton />
          {isLoggedIn && (
            <span className="spinner-border spinner-border-sm mr-1"></span>
          )}
        </form>
      ) : (
        <>
          <Typography>Hello {username}</Typography>
          <DefaultButton
            type="button"
            text={isLoggedIn ? "Logout" : "Login"}
            onClick={handleLogout}
          />
        </>
      )}
    </>
  );
}

function RegisterButton() {
  return (
    <Link to="/register">
      <DefaultButton text="Register"></DefaultButton>
    </Link>
  );
}
