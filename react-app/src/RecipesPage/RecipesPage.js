import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Content from "./Content";

import CssBaseline from "@material-ui/core/CssBaseline";
import { useSelector } from "react-redux";
import BottomNavigation from "../components/BottomNav/BottomNav";
import Footer from "../images/wave.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    minHeight: "50vh",
    backgroundImage: `url(${Footer})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));


export function RecipesPage() {
  const classes = useStyles();
  const loggedIn = useSelector((state) => state.authentication.loggedIn);
  /** const classes = useStyles();*/

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        <Grid container direction="column">
          <Grid item>
            <Header />
          </Grid>
          <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
              <Content />
            </Grid>
            <Grid item xs={false} sm={2} />
          </Grid>
        </Grid>
     </main>
 

      <footer className={classes.footer}>
      </footer>
      {loggedIn && <BottomNavigation align="center" gutterBottom />}
    </React.Fragment>
    );
}

export default RecipesPage;
