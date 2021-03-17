import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useState, useEffect } from "react";
import recipe_img from "../../images/recipe_s.jpg";
import config from "../../config";
import RecipeCard, { RecipeCardForm } from "./RecipeCard";
import { useDispatch, useSelector } from "react-redux";
import FloatingActionButtons from "../Button/FloatingButton";
var _ = require("underscore");

const Recipe = (props) => {
  let [responseObj, setResponseObj] = useState([]);
  let [cards, setCards] = useState([0, 1, 2]);
  let [addedCards, setAddedCards] = useState([]);
  const userToken = useSelector((state) =>
    state.authentication.loggedIn ? state.authentication.user.token : undefined
  );
  useEffect(() => {
    getData()
      .then((data) => {
        data.map((card) => (card.img = recipe_img));
        // data.img = recipe_img;
        setResponseObj(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
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
  function addOwnCard(event) {
    // console.log("click");
    let counter = 0;
    if (!_.isEmpty(addedCards)) {
      counter = addedCards[addedCards.length - 1] + 1;
    }
    setAddedCards([...addedCards, counter]);
  }
  function saveRecipe(event) {
    // console.log("save");
    // call API method
    // render as normal recipe: 1)
    // message that saved under favorites
  }
  return (
    <Container className={props.classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4} direction="column" alignItems="center">
        {!_.isEmpty(responseObj) &&
          cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <RecipeCard recipe={responseObj[card]} />
            </Grid>
          ))}
        {addedCards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <RecipeCardForm saveHandle={saveRecipe} />
          </Grid>
        ))}
      </Grid>
      <FloatingActionButtons onClick={addOwnCard} />
    </Container>
  );
};

export default Recipe;
