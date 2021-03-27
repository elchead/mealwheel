import React from "react";
import { Grid } from "@material-ui/core";
import MainCard from "./MainCard";
import RecipesDataList from "./RecipesDataDEP";
import Recipe from "../components/Recipes/Recipe";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const Content = () => {
  const userId = useSelector((state) => state.authentication.user.id);
  const classes = useStyles();
  const getRecipesDataCard = (RecipesDataObj) => {
    const {
      title,
      subtitle,
      description,
      avatarUrl,
      imageUrl,
    } = RecipesDataObj;
    return (
      <Grid item xs={12} sm={4}>
        <MainCard {...RecipesDataObj} />
      </Grid>
    );
  };

  return (
    <Recipe classes={classes} endpoint={"users/" + userId + "/favRecipes"} />
  );
};

export default Content;
