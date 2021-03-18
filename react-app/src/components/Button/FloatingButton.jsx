import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NavigationIcon from "@material-ui/icons/Navigation";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab {...props} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      {/* <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon className={classes.extendedIcon} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab> */}
    </div>
  );
}
