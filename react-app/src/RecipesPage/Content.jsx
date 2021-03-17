import React from "react";
import { Grid } from "@material-ui/core";
import MainCard from "./MainCard";
import RecipesDataList from "./RecipesData";

const Content = () => {
    const getRecipesDataCard = RecipesDataObj => {
        const{ title, subtitle, description, avatarUrl, imageUrl} = RecipesDataObj
        return (
            <Grid item xs={12} sm={4}>
            <MainCard {...RecipesDataObj}/>
            </Grid>
            );
    };

    return (
        <Grid container spacing={4}>
            {RecipesDataList.map(RecipesDataObj => getRecipesDataCard(RecipesDataObj))}
        </Grid>
    );   
};

export default Content;