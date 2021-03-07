import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";
import recipe_img from "../../images/recipe_s.jpg";
import config from "../../config";
import RecipeCard from "./RecipeCard";
import { useDispatch, useSelector } from "react-redux";

const Recipe = (props) => {
  let [responseObj, setResponseObj] = useState({ Ingredients: [] });
  let [cards, setCards] = useState([1, 2, 3]);
  const loggedIn = useSelector((state) => state.authentication.loggedIn);
  useEffect(() => {
    getData()
      .catch((err) => {
        console.error(err);
      })
      .then((data) => {
        data.img = recipe_img;
        setResponseObj(data);
      });
  }, []);
  async function getData() {
    const url = config.apiUrl + "/recipes";
    // url = "http://localhost:5000/recipes";
    const res = await fetch(url);
    const recipes = await res.json();
    return recipes;
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
