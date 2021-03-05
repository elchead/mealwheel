import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "../TextField/TextField";
import DefaultButton from "../Button/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export function LoginField() {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField text="Username" />
      <TextField text="Password" />
    </form>
  );
}

export function LoginButton() {
  return <DefaultButton text="Login"></DefaultButton>;
}

export default function LoginMask() {
  return (
    <>
      <LoginField></LoginField>
      <LoginButton></LoginButton>
      <DefaultButton text="Register"></DefaultButton>
    </>
  );
}
