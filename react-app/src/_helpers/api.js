import config from "../config";
import { authHeader } from "../_helpers";
async function fetchData(http_method, endpoint) {
  const url = config.apiUrl + "/" + endpoint;
  try {
    const res = await fetch(url, {
      method: http_method,
      withCredentials: true,
      credentials: "include",
      headers: authHeader(),
    });
    const recipes = await res.json();
    return recipes;
  } catch (err) {
    throw new Error("API is not available");
  }
}
export async function getData(endpoint) {
  return fetchData("GET", endpoint);
}

export async function postData(endpoint) {
  return fetchData("POST", endpoint);
}

export async function getRecipes() {
  //  // const endpoint = "recipes";
  // const http_method = "GET";
  // const url = config.apiUrl + "/" + endpoint + "?nbr=10";
  // try {
  //   const res = await fetch(url, {
  //     method: http_method,
  //   });
  //   const recipes = await res.json();
  //   return recipes;
  // } catch (err) {
  //   throw new Error("API is not available");
  return fetchData("GET", "recipes?nbr=10");
}
