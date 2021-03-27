import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Recipe from "../components/Recipes/Recipe";
<<<<<<< HEAD
=======
import LoginMask from "../components/Login/Login";
import { useSelector } from "react-redux";
import BottomNavigation from "../components/BottomNav/BottomNav";
import Footer from "../images/wave.svg";
>>>>>>> origin/master

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
<<<<<<< HEAD
    width: "100%",
    height: "20px",
    bottom: 0,
    backgroundColor: "#fff"
=======
    minHeight: "50vh",
    backgroundImage: `url(${Footer})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
>>>>>>> origin/master
  },
}));

export function HomePage() {
  const classes = useStyles();
  const loggedIn = useSelector((state) => state.authentication.loggedIn);
  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              MealWheel
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              The meal planner to save you time and reduce waste
            </Typography>
            {/* <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div> */}
          </Container>
        </div>
        {loggedIn && <Recipe classes={classes}></Recipe>}
      </main>

      {/* Footer */}
      <footer className={classes.footer}>
<<<<<<< HEAD
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#16FFA6"
      fill-opacity="1" d="M0,0L34.3,37.3C68.6,75,137,149,206,192C274.3,235,343,245,411,218.7C480,192,549,128,617,106.7C685.7,85,754,107,823,133.3C891.4,160,960,192,1029,181.3C1097.1,171,1166,117,1234,85.3C1302.9,53,1371,43,1406,37.3L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
=======
>>>>>>> origin/master
        {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
<<<<<<< HEAD
          <Copyright /> */}
        
=======
        <Copyright /> */}
>>>>>>> origin/master
      </footer>
      {loggedIn && <BottomNavigation align="center" gutterBottom />}
      {/* End footer */}
    </React.Fragment>
  );
}

export default HomePage;
