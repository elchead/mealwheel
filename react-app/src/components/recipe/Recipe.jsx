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
import config from "../../config.json";

const RecipeCard = (props) => {
  return (
    <div>
      <Typography>Ingredients</Typography>
      <ul>
        {props.recipe.Ingredients.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
      <Typography>Steps</Typography>
      <p>{props.recipe.Steps}</p>
    </div>
  );
};
const Recipe = (props) => {
  let [responseObj, setResponseObj] = useState({ Ingredients: [] });
  let [cards, setCards] = useState([1, 2, 3]);
  useEffect(() => {
    getData()
      .catch((err) => {
        console.error(err);
      })
      .then((data) => {
        console.log(data);
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
        {cards.map((card) => (
          <Grid item key={card} xs={3} sm={6} md={4}>
            <Card className={props.classes.card}>
              <CardMedia
                className={props.classes.cardMedia}
                image={recipe_img}
                title="Image title"
              />
              <CardContent className={props.classes.cardContent}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                ></Typography>
                <RecipeCard recipe={responseObj} />
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View
                </Button>
                <Button size="small" color="primary">
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Recipe;
