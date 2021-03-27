import LoginMask from "../components/Login/Login";
import "../index.css";

import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

const headersData = [
  {
    label: "Sign Up",
    onClick: "/register",
  },
  {
    label: "Login",
    onClick: "/login",
  },
];

const font = "'Julius Sans One', sans-serif";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    marginLeft: "15ch",
    height: "100vh",
    fontFamily: font,
  },
  header: {
    background: "none",
    paddingRight: "79px",
    paddingLeft: "80px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#000",
    textAlign: "left",
    marginRight: "3ch",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
  title: {
    fontFamily: "Julius Sans One, sans-serif",
  },
  text: {
    fontFamily: "Cambria",
    color: "black",
  },
}));

export default function Header() {
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1 // disable mobile version
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {MealWheelLogo}
        <div>
          <LoginMask />
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <div>
          <IconButton
            {...{
              edge: "start",
              color: "black",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
        </div>

        <div>{MealWheelLogo}</div>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, onClick }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: onClick,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const MealWheelLogo = (
    <Typography
      variant="h6"
      align="center"
      color="inherit"
      noWrap
      className={logo}
    >
      MealWheel
    </Typography>
  );

  const classes = useStyles();

  return (
    <header>
      <div className={classes.root}>
        <AppBar className={header} elevation={0}>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
        <div>
          <Typography
            className={classes.title}
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Mealwheel
          </Typography>
          <Typography
            className={classes.text}
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            The meal planner to save you time and reduce waste
          </Typography>
        </div>
      </div>
    </header>
  );
}
