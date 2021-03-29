import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { userService } from "../../_services/user.service";
import { useSelector } from "react-redux";
import Menu, { AddToPlan } from "./Menu";
import TextField from "@material-ui/core/TextField";
import Button from "../Button/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function FavoriteButton(props) {
  const [isSelected, setSelected] = useState(false);
  const userId = useSelector((state) => state.authentication.user.id);
  useEffect(() => {
    async function fetchIsSaved(userId, recipe) {
      const isSaved = await userService.isRecipeSaved(userId, recipe);
      setSelected(isSaved);
    }
    fetchIsSaved(userId, props.recipe);
  }, []);

  function handleFavorite() {
    if (!isSelected) {
      userService.saveRecipe(userId, props.recipe);
    } else {
      userService.deleteRecipe(userId, props.recipe);
    }
    setSelected(!isSelected);
  }
  return (
    <>
      <IconButton aria-label="add to favorites" onClick={handleFavorite}>
        <FavoriteIcon />
      </IconButton>
    </>
  );
}

export default function RecipeCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [isVisible, setVisible] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function discard(event) {
    setVisible(false);
  }

  return (
    <>
      {isVisible && (
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={<Menu discard={discard} />}
            title={props.recipe.name}
            subheader="September 14, 2016"
          />
          <CardMedia
            className={classes.media}
            image={props.recipe.img}
            title={props.recipe.name}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.recipe.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <FavoriteButton recipe={props.recipe} />
            {/* <IconButton aria-label="share">
              <ShareIcon />
            </IconButton> */}
            <AddToPlan recipe={props.recipe} />
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                <b>Preparation time:</b> {props.recipe.minutes} min
              </Typography>
              <Typography paragraph>
                <b>Steps</b>:
              </Typography>
              <Typography paragraph>
                <ol>
                  {props.recipe.steps.map((i) => (
                    <li>{i}</li>
                  ))}
                </ol>
              </Typography>
              <Typography paragraph>{props.recipe.Steps}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      )}
    </>
  );
}

export function RecipeCardForm(props) {
  const classes = useStyles();
  const [isVisible, setVisible] = useState(true);

  function discard(event) {
    setVisible(false);
  }

  return (
    <>
      {isVisible && (
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={<Menu discard={discard} />}
            // title={
            //   <TextField multiline name="name" label="Recipe title"></TextField>
            // }
            // subheader="September 14, 2016"
          />
          {/* <CardMedia
            className={classes.media}
            image={props.recipe.img}
            title={props.recipe.name}
          /> */}
          <CardContent>
            {/* <Typography variant="body2" color="textSecondary" component="p">
              {props.recipe.description}
            </Typography> */}
          </CardContent>
          <CardActions disableSpacing>
            <CardContent>
              <RecipeForm hideForm={props.hideOverlay} />
            </CardContent>
          </CardActions>
        </Card>
      )}
    </>
  );
}

function RecipeForm(props) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [prepTime, setPrepTime] = useState(0);
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState("");
  const [description, setDescription] = useState("");
  const userId = useSelector((state) => state.authentication.user.id);

  function saveRecipe(recipe) {
    userService.saveRecipe(userId, recipe).catch((err) => console.error(err));
  }
  function changePrepTime(event) {
    setPrepTime(event.target.value);
  }

  function changeIngredients(event) {
    setIngredients(event.target.value);
  }

  function changeSteps(event) {
    setSteps(event.target.value);
  }

  function changeDescription(event) {
    setDescription(event.target.value);
  }

  function changeName(event) {
    setName(event.target.value);
  }

  const uid = function () {
    return parseInt(Date.now() - 100 * Math.random());
  };

  function handleSubmit(e) {
    e.preventDefault();
    saveRecipe({
      name: name,
      steps: steps,
      minutes: prepTime,
      ingredients: ingredients,
      description: description,
      id: uid(),
    });
    props.hideForm();
  }
  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        name="name"
        label="Recipe title"
        onChange={changeName}
        InputLabelProps={{
          shrink: true,
        }}
      ></TextField>
      <TextField
        id="description"
        label="Description:"
        multiline
        InputLabelProps={{
          shrink: true,
        }}
        onChange={changeDescription}
      />
      <TextField
        id="prep"
        label="Preparation time: (min)"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={changePrepTime}
      />
      <TextField
        id="ingredients"
        label="Ingredients:"
        multiline
        InputLabelProps={{
          shrink: true,
        }}
        onChange={changeIngredients}
      />
      <TextField
        id="steps"
        label="Steps:"
        multiline
        InputLabelProps={{
          shrink: true,
        }}
        onChange={changeSteps}
      />
      <Button type="submit" text="Save" />
    </form>
  );
}
