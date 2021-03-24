import { AppBar, Toolbar, Typography, makeStyles, Button, IconButton, Drawer, Link, MenuItem } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import LoginMask from "../components/Login/Login";
import RegisterButton from "../components/Login/Register";
import "../index.css";

const font =  "'Julius Sans One', sans-serif";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    marginLeft: "15ch",
      "@media (max-width: 900px)": {
        marginLeft: 50,
        marginRight: 200,
    },
    height: "100vh",
    fontFamily: font,
  },
  header: {
    background: 'none',
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
  title: {
    fontFamily: "Julius Sans One, sans-serif",
  },
  text: {
    fontFamily: "Cambria",
    color: "black",
    marginBottom: 40,
  }
}));

export default function Header() {
const { header, logo, toolbar } = useStyles();

const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
    const { mobileView, drawerOpen } = state;
  
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
        <LoginMask/>
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

        <LoginMask/>      
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
      <div className={classes.root}>
      <AppBar className={header} elevation={0}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
      <div>
      <Grid container direction="column">
        <Grid item>
        <Hidden only={['xs', 'sm']}>
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
            </Hidden>
            </Grid>

            <Grid item>
            <Hidden only={['xs', 'sm']}>
            <Typography
              className={classes.text}
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              The meal planner to save you time and reduce waste
            </Typography>
            </Hidden>
            
            </Grid>

            
            <Grid container justify="center">
            <Hidden only={['xs', 'sm']}>
              <Grid item>
                <RegisterButton/>
              </Grid>
              </Hidden>
            </Grid>

            <Grid item>
        <Hidden only={['md','lg', 'xl']}>
      <Typography
              className={classes.title}
              component="h1"
              variant="h4"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              Mealwheel
            </Typography>
            </Hidden>
            </Grid>

            <Grid item>
            <Hidden only={['md','lg', 'xl']}>
            <Typography
              className={classes.text}
              variant="h7"
              align="left"
              color="textSecondary"
              paragraph
            >
              The meal planner to save you time and reduce waste
            </Typography>
            </Hidden>
            </Grid>

          </Grid>

          <Grid container>
            <Hidden only={['md','lg', 'xl']}>
              <Grid item>
                <RegisterButton/>
              </Grid>
              </Hidden>
            </Grid>
      </div>
      </div>
    </header>

  );
}