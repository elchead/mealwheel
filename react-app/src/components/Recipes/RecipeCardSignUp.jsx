import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useState, useEffect } from "react";
import recipe_img from "../../images/recipe_s.jpg";
import config from "../../config";
import React from "react";
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
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { userService } from "../../_services/user.service";
import { useSelector } from "react-redux";
import Menu from "./Menu";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

var _ = require("underscore");

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
            // action={<Menu discard={discard} />}
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
            {/* <IconButton aria-label="share">
              <ShareIcon />
            </IconButton> */}
            {/* <AddToPlan recipe={props.recipe} /> */}
            <IconButton aria-label="discard" onClick={discard}>
              <HighlightOffIcon />
            </IconButton>
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
            <IconButton
              aria-label="favorite"
              onClick={() => props.handleLiked(props.recipe)}
            >
              <FavoriteIcon />
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
