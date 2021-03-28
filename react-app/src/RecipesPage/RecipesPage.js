import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Layout from "../components/Layout";
import LoginHeader from "../HomePage/LoginHeader";
import Recipe from "../components/Recipes/Recipe";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { userService } from "../_services";
const useStyles = makeStyles({});

function RecipesPage() {
  const userId = useSelector((state) =>
    state.authentication.user ? state.authentication.user.id : undefined
  );
  const classes = useStyles();
  return (
    <>
      {/* <Layout /> */}
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
