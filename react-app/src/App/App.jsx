import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { history } from "../_helpers";
import { alertActions } from "../_actions";
import { PrivateRoute } from "../components";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";
import SignUp from "../SignUpPage/SignUp";

import RecipesPage from "../RecipesPage/RecipesPage";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../HomePage/Header";

import BackgroundImage from "../images/small.png";
import { CssBaseline } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingBottom: "10ch",
  },
}));

function App() {
  const classes = useStyles();
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  });

  return (
    <div className="jumbotron">
      <div className="container">
        <div className="col-md-8 offset-md-2">
          {alert.message && (
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          )}
          <Router history={history}>
            <div className={classes.root}>
              <CssBaseline />
              <Header />
            </div>
            <Route exact path="/" component={HomePage} />
            <Route path="/register" component={SignUp} />
            <Route path="/recipes" component={RecipesPage} />
            {/*<Route path="/login" component={LoginPage} />*/}
            {/* <Switch>
              <PrivateRoute exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Redirect from="*" to="/" />
            </Switch> */}
          </Router>
        </div>
      </div>
    </div>
  );
}

export { App };
