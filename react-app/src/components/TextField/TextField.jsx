import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { default as BasicTextFields } from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function TextField(props) {
  return (
    <BasicTextFields
      {...props}
      // id="standard-basic" // TODO no id?
      label={props.text}
      variant="outlined"
    />
  );
}
