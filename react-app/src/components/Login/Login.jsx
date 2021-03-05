import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "../TextField/TextField";
import DefaultButton from "../Button/Button";

import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../../_actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export function LoginField(props) {
  return (
    <>
      <TextField name="username" text="Username" onChange={props.onChange} />
      <TextField
        name="password"
        type="password"
        onChange={props.onChange}
        text="Password"
      />
    </>
  );
}

export function LoginButton(props) {
  const dispatch = useDispatch();
  function handle(e) {
    const isLoggedIn = props.loggedIn;
    if (isLoggedIn) {
      dispatch(userActions.logout());
      console.log("log out");
    }
  }
  return (
    <DefaultButton
      type={props.loggedIn ? "button" : "submit"}
      text={props.loggedIn ? "Logout" : "Login"}
      onClick={handle}
    ></DefaultButton>
  );
}

export default function LoginMask() {
  const classes = useStyles();
  const [submitted, setSubmitted] = useState(false);
  const [isLoggedIn, setLogin] = useState(false);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const { username, password } = inputs;
  const loggedIn = useSelector((state) => state.authentication.loggedIn);
  const dispatch = useDispatch();
  const location = useLocation();
  function handleChange(e) {
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
  return (
    <div>
      {!loggedIn ? (
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <LoginField onChange={handleChange}></LoginField>
          {submitted && !username && (
            <div className="invalid-feedback">Username is required</div>
          )}
          {submitted && !password && (
            <div className="invalid-feedback">Password is required</div>
          )}
          <LoginButton loggedIn={loggedIn}></LoginButton>
          <RegisterButton />
          {loggedIn && (
            <span className="spinner-border spinner-border-sm mr-1"></span>
          )}
        </form>
      ) : (
        <LoginButton loggedIn={loggedIn}></LoginButton>
      )}
    </div>
  );
}

function RegisterButton() {
  return (
    <Link to="/register">
      <DefaultButton text="Register"></DefaultButton>
    </Link>
  );
}
