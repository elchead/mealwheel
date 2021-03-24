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

/*import BottomNavigation from "@material-ui/core/BottomNavigation";
import SimpleBottomNavigation from "../components/BottomNav";
import BottomNav from "../components/BottomNav/BottomNav";*/

function App() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  });


  /*  Add under <div className="App"
   <NavBar/>
  <Route exact path="/RecipesPage" component={RecipesPage}/>
  <Route exact path="/" component={BottomNav} />*/

  return (
    <div className="App"> 
    <NavBar/>
  <Route exact path="/RecipesPage" component={RecipesPage}/>
  <Route exact path="/" component={HomePage} />
        <div className="jumbotron">
          <div className="container">
            <div className="col-md-8 offset-md-2">
              {alert.message && (
                <div className={`alert ${alert.type}`}>{alert.message}</div>
              )}
            <Router history={history}>
                <Route path="/register" component={SignUp} />
                {/* <Route path="/login" component={LoginPage} /> */}
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
    </div>
  );
}

export { App };
