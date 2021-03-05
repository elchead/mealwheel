import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DefaultButton from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Button(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DefaultButton {...props} variant="contained" color="secondary">
        {props.text}
      </DefaultButton>
    </div>
  );
}
