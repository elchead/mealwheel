import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useState, useEffect } from "react";
import recipe_img from "../../images/recipe_s.jpg";
import config from "../../config";
import RecipeCard from "./RecipeCard";
import { useDispatch, useSelector } from "react-redux";

const Recipe = (props) => {
  let [responseObj, setResponseObj] = useState({ Ingredients: [] });
  let [cards, setCards] = useState([1, 2, 3]);
  const loggedIn = useSelector((state) => state.authentication.loggedIn);
  const userToken = useSelector((state) =>
    state.authentication.loggedIn ? state.authentication.user.token : undefined
  );
  useEffect(() => {
    if (loggedIn) {
      getData()
        .then((data) => {
          data.img = recipe_img;
          setResponseObj(data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [loggedIn]);
  async function getData() {
    const url = config.apiUrl + "/recipes";
    const bearer = "Bearer " + userToken;
    try {
      const res = await fetch(url, {
        method: "GET",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization: bearer,
          "Content-Type": "application/json",
        },
      });
      const recipes = await res.json();
      return recipes;
    } catch (err) {
      throw new Error("API is not available");
    }
  }
  return (
    <Container className={props.classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {loggedIn &&
          cards.map((card) => (
            <Grid item key={card} xs={3} sm={6} md={4}>
              <RecipeCard recipe={responseObj} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Recipe;
