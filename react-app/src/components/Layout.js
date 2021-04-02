import React from 'react';
import Header from "../HomePage/Header";
import { makeStyles } from "@material-ui/core/styles";

import BackgroundImage from "../images/small.png";
import MobileImage from "../images/tryout.png";

const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: "100vh",
      backgroundImage: `url(${BackgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      paddingBottom: "10ch",
      backgroundColor: "#fff",
  
      "@media (max-width: 767px)": {
        backgroundImage: `url(${MobileImage})`,
        paddingBottom: 0,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "60%"
      },
    },
  }));

const Layout =({children}) =>{
    const classes = useStyles();
    return(
        <>
        <div>
            <div className={classes.root}>
              <Header />
            </div>
            
            
        </div>
        <main>{children}</main>
        </>
    )
}

export default Layout;