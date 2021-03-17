import React from "react";
import { Grid } from "@material-ui/core";

function RecipesPage() {
    return (
        <Grid container direction="column">
            <Grid item> Header </Grid>
            <Grid item container>
                <Grid xs=12 sm=6></Grid>
             Content of the Page 
             </Grid>
        </Grid>
    );  
}

export default RecipesPage;
