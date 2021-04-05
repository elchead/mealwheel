import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import HomeIcon from "@material-ui/icons/Home";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import TextField from "../TextField/TextField";
import Hidden from "@material-ui/core/Hidden";
import { Link as RouterLink } from "react-router-dom";
import PreferenceCheckbox from "../SignUpCheckboxes";

import { userActions } from "../../_actions";
import "./Form.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  Text: {
    color: "black",
  },
  rootbtns: {
    padding: theme.spacing(3, 2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#000",
  },
  btn: {
    background: "linear-gradient(45deg, #16ffa6 30%, #00ca77 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    width: "35ch",
    padding: "0 30px",
  },
  forgotPassword: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    color: "#00ca77",
  },
  formControlLabel: {
    marginRight: 0,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#16ffa6",
  },
  paper: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menubtn: {
    marginTop: theme.spacing(5),
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  Text: {
    color: "black",
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export default function RegisterButton() {
  const classes = useStyles();
  const [user, setUser] = useState({
    username: "",
    password: "",
    preferences: [""],
  });
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  // reset login status
  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (user.username && user.password) {
      dispatch(userActions.register(user));
    }
  }

  function setPreferences(value) {
    setUser((user) => ({ ...user, preferences: value }));
    // console.log("PRef", user.preferences);
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        justify="center"
        className={classes.registerButton}
      >
        Create a new account
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Create a new account
          </DialogTitle>

          <DialogContent>
            <Grid container spacing={2}>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  text="First name"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              {submitted && !user.firstName && (
                <div className="invalid-feedback">First name is required</div>
              )}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  text="Last name"
                  autoComplete="lname"
                  onChange={handleChange}
                />
              </Grid>
              {submitted && !user.lastName && (
                <div className="invalid-feedback">Last name is required</div>
              )}
              TODO delete name signup */}
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  text="Username"
                  autoComplete="lname"
                  onChange={handleChange}
                />
              </Grid>
              {submitted && !user.username && (
                <div className="invalid-feedback">Username is required</div>
              )}
              {/* <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  text="Password"
                  autoComplete="current-password"
                  onChange={handleChange}
                />
              </Grid>
              {submitted && !user.password && (
                <div className="invalid-feedback">Password is required</div>
              )}
              <Grid item xs={12}>
                <Typography>
                  <b>Food preferences:</b>
                </Typography>
                <PreferenceCheckbox setPreferences={setPreferences} />
                {/* <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive sd inspiration, marketing promotions and updates via email."
                /> */}
              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions>
            <Grid container justify="center">
              <Grid item>
                <Button
                  onClick={handleSubmit}
                  color="primary"
                  type="submit"
                  className={classes.btn}
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </DialogActions>

          <Typography
            align="center"
            className={classes.forgotPassword}
            role="button"
          ></Typography>
        </div>
      </Dialog>
    </form>
  );
}
