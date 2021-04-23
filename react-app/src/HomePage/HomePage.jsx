import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Recipe from "../components/Recipes/Recipe";
import { useSelector } from "react-redux";
// import Footer from "../images/wave.svg";
import BottomNavigation from "../components/BottomNav/BottomNav";
import Footer from "../HomePage/Footer";
import LoginHeader from "../HomePage/LoginHeader";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { getRecipes } from "../_helpers/api";
import Layout from "../components/Layout";
import { userService as user } from "../_services/user.service";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: "#fff",
    padding: theme.spacing(8, 0, 6),
    marginRight: 100,
    marginLeft: 100,
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
  paper: {
    height: 140,
    width: 100,
  },
}));

export function HomePage() {
  const classes = useStyles();
  const loggedIn = useSelector((state) => state.authentication.loggedIn);
  const userId = useSelector((state) =>
    loggedIn ? state.authentication.user.id : undefined
  );
  return (
    <>
      {loggedIn && <LoginHeader />}
      <main>
        {!loggedIn && (
          <div className={classes.heroContent}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardContent>
                    <Typography
                      component="h1"
                      variant="h5"
                      align="center"
                      color="textPrimary"
                      gutterBottom
                    >
                      Personalized food recommendations
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardContent>
                    <Typography
                      component="h1"
                      variant="h5"
                      align="center"
                      color="textPrimary"
                      gutterBottom
                    >
                      Plan your meal week
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardContent>
                    <Typography
                      component="h1"
                      variant="h5"
                      align="center"
                      color="textPrimary"
                      gutterBottom
                    >
                      Save your favorite recipes
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

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
          </div>
        )}

        {loggedIn && userId !== undefined && (
          <Recipe
            classes={classes}
            getData={() => user.getRecommendedRecipes(userId)}
          ></Recipe>
          
        )}
      </main>

      {/* Footer */}
      {/* {loggedIn && <BottomNavigation align="center" gutterBottom />} */}

      {!loggedIn && <Footer />}

      {/* End footer */}
    </>
  );
}

export default HomePage;
