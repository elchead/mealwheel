import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {},
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className={classes.root}
    >
      <BottomNavigationAction label="Inspiration" icon={<EmojiObjectsIcon />} />
      <BottomNavigationAction
        label="Favorites"
        component={Link}
        to="/recipes"
        icon={<FavoriteIcon color="secondary" />}
      />
      <BottomNavigationAction label="My Profile" icon={<PermIdentityIcon />} />
    </BottomNavigation>
  );
}
