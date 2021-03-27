import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Content from "./Content";
import Layout from "../components/Layout";
function RecipesPage() {
  return (
    <>
      {/* <Layout /> */}
      <main>
        <Grid container direction="column">
          {/* <Grid item>
        <Header />
      </Grid> */}
          <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
              <Content />
            </Grid>
            <Grid item xs={false} sm={2} />
          </Grid>
        </Grid>
      </main>
    </>
  );
}

export default RecipesPage;
