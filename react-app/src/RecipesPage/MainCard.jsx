import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Avatar, IconButton, CardMedia } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Recipe from "../components/Recipes/Recipe";
import { useSelector } from "react-redux";
const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const MainCard = (props) => {
  const classes = useStyles();
  // const { avatarSrc, title, subtitle, description, imgSrc } = props;
  const userId = useSelector((state) => state.authentication.user.id);
  //Avatar: where you can source the meals

  return (
    <Recipe
      classes={classes}
      endpoint={"users/" + userId + "/favRecipes"}
    ></Recipe>
    // <Card>
    //     <CardHeader
    //       avatar={ <Avatar src={avatarSrc} />
    //       }
    //       action={
    //         <IconButton aria-label="settings">
    //           <ShareIcon />
    //         </IconButton>
    //       }
    //       title={title}
    //       subheader={subtitle}
    //     />

    //     <CardMedia style={{height:"150px"}} image={imgSrc}/>

    //     <CardContent>
    //       <Typography variant="body2" component="p">
    //         {description}
    //       </Typography>
    //     </CardContent>

    //   <CardActions>
    //     <IconButton aria-label="add to favorites">
    //       <FavoriteIcon />
    //     </IconButton>
    //   </CardActions>
    // </Card>
  );
};

export default MainCard;
