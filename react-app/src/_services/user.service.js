import config from "../config";
import { authHeader } from "../_helpers";
var _ = require("underscore");
export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete,
  saveRecipe,
  deleteRecipe,
  isRecipeSaved,
  updateWeekPlan,
  getDaysToBeUpdated,
  getFavoriteRecipes,
  getRecommendedRecipes,
};

function login(username, password) {
  return post(
    "users/authenticate",
    JSON.stringify({ username, password })
  ).then((user) => {
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem("user", JSON.stringify(user));

    return user;
  });
}

function post(endpoint, body = {}) {
  return fetchData("POST", endpoint, body);
}

function get(endpoint, body = {}) {
  return fetchData("GET", endpoint, body);
}

function put(endpoint, body = {}) {
  return fetchData("PUT", endpoint, body);
}

function deleteREST(endpoint, body = {}) {
  return fetchData("DELETE", endpoint, body);
}

function fetchData(http_method, endpoint, body) {
  const requestOptions = {
    method: http_method,
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  if (!_.isEmpty(body)) {
    requestOptions.body = body;
  }
  return fetch(`${config.apiUrl}/${endpoint}`, requestOptions).then(
    handleResponse
  );
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

function getAll() {
  return get("users", {});
}

function getById(id) {
  return get(`users/${id}`, {});
}

function register(user) {
  return post("users/register", JSON.stringify(user));
}

function update(user) {
  return put(`users/${user.id}`, JSON.stringify(user));
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return deleteREST(`users/${id}`, {});
}

function handleResponse(response) {
  console.log(response);
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

function saveRecipe(userId, recipe) {
  const req = { recipe: recipe };
  return post(`users/${userId}/saveRecipe`, JSON.stringify(req));
}

function deleteRecipe(userId, recipe) {
  return post(`users/${userId}/deleteRecipe/${recipe.id}`);
}

function isRecipeSaved(userId, recipe) {
  return post(`users/${userId}/checkRecipe/${recipe.id}`);
}

function updateWeekPlan(userId, day, recipe) {
  const req = { recipe: recipe };
  return put(
    `users/${userId}/weekPlan/${day.toLowerCase()}`,
    JSON.stringify(req)
  );
}

function getDaysToBeUpdated(userId) {
  return get(`users/${userId}/daysToBeUpdated`);
}

function getFavoriteRecipes(userId) {
  return get(`users/${userId}/favRecipes`);
}

async function getRecommendedRecipes(userId) {
  console.log(userId);
  return get(`users/${userId}/recipes?nbr=6`);
}
