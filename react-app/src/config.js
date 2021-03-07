const prod = {
  apiUrl: "https://mealwheel21.herokuapp.com",
};

const dev = {
  apiUrl: "http://localhost:4000",
};

let config = process.env.REACT_APP_STAGE === "production" ? prod : dev;
config = {
  // Add common config values here
  ...config,
};
export default config;
