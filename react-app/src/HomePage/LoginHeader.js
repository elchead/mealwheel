import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';

import LoggedIn from "../components/Login/LoggedIn";
import "../index.css";

const font =  "'Julius Sans One', sans-serif";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#16FFA6',
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
      "@media (max-width: 900px)": {
        marginRight: 0,
        marginLeft: 15,
      },
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
}));

export default function LoginHeader() {
const { header, logo, toolbar } = useStyles();

const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
    const { mobileView } = state;
  
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return <Toolbar className={toolbar}>{MealWheelLogo}
      <div>
        <LoggedIn/>
      </div>
    </Toolbar>;
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <Grid container spacing={1}>
          <Grid item xs={12}>
        <div>{MealWheelLogo}</div>
          </Grid>
        </Grid>
        <LoggedIn/>      
      </Toolbar>
    );
  };

  const MealWheelLogo = (
    <Typography variant="h6" align="center" color="inherit" noWrap className={logo}>
        MealWheel
    </Typography>
  );

  const classes = useStyles();

  return (
    <header>

      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>

    </header>

  );
}