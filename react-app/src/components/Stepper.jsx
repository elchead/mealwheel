import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { getRecipes } from "../_helpers/api";
import RecipeCard from "../components/Recipes/RecipeCardSignUp";
var _ = require("underscore");
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: "hidden",
    display: "block",
    width: "100%",
  },
}));

let StepCount = 0;
export default function Stepper(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [Steps, setSteps] = React.useState([]);
  const maxSteps = Steps.length;
  const getSteps = async () => {
    if (StepCount < 1) {
      const res = await getRecipes();
      setSteps(res);
      StepCount += 1;
      console.log(res);
    }
  };
  React.useEffect(() => {}, [Steps]);
  getSteps();

  const handleLiked = (recipeId) => {
    props.setLikedMeals(recipeId);
    handleNext();
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      if (prevActiveStep < maxSteps - 1) {
        return prevActiveStep + 1;
      } else return maxSteps - 1;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      {/* <Paper square elevation={0} className={classes.header}>
        <Typography>{Steps[activeStep].title}</Typography>
      </Paper> */}
      {!_.isEmpty(Steps) && (
        <RecipeCard recipe={Steps[activeStep]} handleLiked={handleLiked} />
      )}
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}
