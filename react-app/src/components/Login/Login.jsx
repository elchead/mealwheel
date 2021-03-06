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
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import HomeIcon from "@material-ui/icons/Home";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import TextField from "../TextField/TextField";
import Hidden from "@material-ui/core/Hidden";
import { Link as RouterLink } from "react-router-dom";

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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {!isLoggedIn ? (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid
            container
            justify="flex-end"
            spacing={1}
            direction="row"
            alignItems="center"
          >
            {/* <Grid item xs={6} sm={3}>
              <IconButton color="primary" component={RouterLink} to="/">
                <HomeIcon />
              </IconButton>
            </Grid> */}

            <Grid item className={classes.rootbtns} xs={1} sm={4}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
              >
                Login
              </Button>
            </Grid>

            <Hidden only={["xs", "sm"]}>
              <Grid item className={classes.rootbtns} sm={5}>
                <RegisterButton />
              </Grid>
            </Hidden>
          </Grid>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
          >
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Login
            </DialogTitle>

            <DialogContent>
              <div className="form-inputs">
                <label className="form-label">Username</label>
                <TextField
                  id="username"
                  className="form-input"
                  name="username"
                  type="username"
                  text="Enter your username"
                  fullWidth
                  onChange={handleInput}
                />
                {submitted && !username && (
                  <div className="invalid-feedback">Username is required</div>
                )}
              </div>

              <div className="form-inputs">
                <label className="form-label">Password</label>
                <TextField
                  className="form-input"
                  name="password"
                  type="password"
                  text="Enter your password"
                  id="password"
                  fullWidth
                  onChange={handleInput}
                />
                {submitted && !password && (
                  <div className="invalid-feedback">Password is required</div>
                )}
              </div>

              {isLoggedIn && (
                <span className="spinner-border spinner-border-sm mr-1"></span>
              )}
            </DialogContent>

            <DialogActions>
              <Grid container justify="center">
                <Grid item>
                  <Button
                    onClick={handleSubmit}
                    color="primary"
                    type="submit"
                    form="myform"
                    className={classes.btn}
                  >
                    Log In
                  </Button>
                </Grid>
              </Grid>
            </DialogActions>

            <Typography align="center" className={classes.forgotPassword}>
              Don't have an account yet?
            </Typography>
            <Grid container justify="center">
              <Grid item>
                <RegisterButton />
              </Grid>
            </Grid>

            <Typography
              align="center"
              className={classes.forgotPassword}
              role="button"
            ></Typography>
          </Dialog>
        </form>
      ) : (
        <>
          <Grid container justify="center" spacing={3}>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                type="button"
                text={isLoggedIn ? "Logout" : "Login"}
                component={RouterLink}
                to="/"
                onClick={handleLogout}
              >
                {" "}
                Log Out
              </Button>
            </Grid>

            <Grid item className={classes.rootbtns}>
              <Typography>Welcome back, {username}</Typography>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}

export function RegisterButton() {
  const classes = useStyles();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
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
    if (user.firstName && user.lastName && user.username && user.password) {
      dispatch(userActions.register(user));
    }
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
              <Grid item xs={12} sm={6}>
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

              {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
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
