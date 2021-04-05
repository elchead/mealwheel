// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// import { userActions } from "../_actions";
// import { MissingFieldError } from "../components/Alert";
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         MealWheel
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function SignUp() {
//   const classes = useStyles();
//   const [user, setUser] = useState({
//     firstName: "",
//     lastName: "",
//     username: "",
//     password: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const dispatch = useDispatch();

//   // reset login status
//   useEffect(() => {
//     dispatch(userActions.logout());
//   }, []);

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setUser((user) => ({ ...user, [name]: value }));
//   }
//   function handleSubmit(e) {
//     e.preventDefault();

//     setSubmitted(true);
//     if (user.firstName && user.lastName && user.username && user.password) {
//       dispatch(userActions.register(user));
//     }
//   }

//   return (
//     <Container component="main" maxWidth="xs">
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign up
//         </Typography>

//         <form className={classes.form} noValidate onSubmit={handleSubmit}>
//           <Grid container spacing={2}>
//             {submitted && !user.firstName && (
//               <Grid item xs={12} sm={12}>
//                 <MissingFieldError field="First Name" />
//               </Grid>
//             )}
//             {submitted && !user.lastName && (
//               <Grid item xs={12} sm={12}>
//                 <MissingFieldError field="Last Name" />
//               </Grid>
//             )}
//             {submitted && !user.password && (
//               <Grid item xs={12} sm={12}>
//                 <MissingFieldError field="Password" />
//               </Grid>
//             )}
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 autoComplete="fname"
//                 name="firstName"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="firstName"
//                 label="First Name"
//                 autoFocus
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="lastName"
//                 label="Last Name"
//                 name="lastName"
//                 autoComplete="lname"
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="username"
//                 label="Username"
//                 name="username"
//                 autoComplete="lname"
//                 onChange={handleChange}
//               />
//             </Grid>
//             {/* <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//               />
//             </Grid> */}
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <FormControlLabel
//                 control={<Checkbox value="allowExtraEmails" color="primary" />}
//                 label="I want to receive sdfasdf inspiration, marketing promotions and updates via email."
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign Up
//           </Button>
//           <Grid container justify="flex-end">
//             <Grid item>
//               <Link href="/" variant="body2">
//                 Already have an account? Sign in
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={5}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }
