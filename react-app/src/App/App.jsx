import React, { useEffect, useState} from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { history } from "../_helpers";
import { alertActions } from "../_actions";
import { PrivateRoute } from "../components";
import { HomePage } from "../HomePage";
import SignUp from "../SignUpPage/SignUp";

import RecipesPage from "../RecipesPage/RecipesPage";
import { Link } from "react-router-dom";
import BottomNavigation from "../components/BottomNav/BottomNav";
import Container from "@material-ui/core/Container";
import NavBar from "../components/NavBar";
import LoginHeader from "../HomePage/LoginHeader";
import Layout from "../components/Layout";

import WeekTable from "../components/WeekTable/WeekTable";
import { AddToPlan } from "../components/Recipes/Menu";
import { generate } from "shortid";

function App() {
  const alert = useSelector((state) => state.alert);
  const loggedIn = useSelector((state) => state.authentication.loggedIn);
  const dispatch = useDispatch();
  const [rows, setRows] = useState ([{
    Mo: "Meal 1",
    Tu: "Meal 2",
    We: "Meal 3",
    Th: "Meal 4",
    Fr: "Meal 5",
    Sa: "Meal 6",
    Su: "Meal 7",
  }]);

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
          {!loggedIn && <Layout />}
          {loggedIn && <LoginHeader />}
      
          <Router history={history}>
            <Route exact path="/" component={HomePage} />
            <Route path="/register" component={SignUp} />
            <Route path="/recipes" component={RecipesPage} />
            {/* <Switch>
              <PrivateRoute exact path="/" component={HomePage} />
              <Redirect from="*" to="/" />
            </Switch> */}

            <WeekTable/>

            <footer>
              <Container>
                {loggedIn && <BottomNavigation gutterBottom />}
              </Container>
            </footer>
          </Router>
        </div>
      </div>
    </div>
  );
}

export { App };
