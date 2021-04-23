import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Layout from "../components/Layout";
import LoginHeader from "../HomePage/LoginHeader";
import Recipe from "../components/Recipes/Recipe";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { userService } from "../_services";
// const useStyles = makeStyles({});
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
function RecipesPage() {
  const userId = useSelector((state) =>
    state.authentication.user ? state.authentication.user.id : undefined
  );
  const classes = useStyles();
  return (
    <>
      <main>
        <Recipe
          classes={classes}
          getData={() => userService.getFavoriteRecipes(userId)}
        ></Recipe>
        {/* <Grid container direction="column">
          {/* <Grid item>
        <Header />
      </Grid>
          <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
              
            </Grid>
            <Grid item xs={false} sm={2} />
          </Grid>
        </Grid> */}
      </main>
    </>
  );
}

export default RecipesPage;
