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
  let [showForm, setShowForm] = useState(false);
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
    setShowForm(true);
  }
  function hideForm() {
    setShowForm(false);
    const cards = [...addedCards];
    cards.pop();
    setAddedCards(cards);
  }
  return (
    <Container className={props.classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <Grid container direction="row">
        {!_.isEmpty(responseObj) &&
          cards.map((card) => (
            <Grid item container>
              <Grid item xs={false} sm={2} />
              <Grid item key={card} xs={12} sm={8}>
                <RecipeCard recipe={responseObj[card]} />
              </Grid>
              <Grid item xs={false} sm={2} />
            </Grid>
          ))}
        {addedCards.map((card) => (
          <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item key={card} xs={12} sm={8}>
              {showForm && <RecipeCardForm hideOverlay={hideForm} />}
            </Grid>
            <Grid item xs={false} sm={2} />
          </Grid>
        ))}
      </Grid>
      <FloatingActionButtons onClick={addOwnCard} />
    </Container>
  );
};

export default Recipe;
