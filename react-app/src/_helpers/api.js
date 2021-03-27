import config from "../config";

async function fetchData(http_method, endpoint, userToken) {
  const url = config.apiUrl + "/" + endpoint;
  const bearer = "Bearer " + userToken;
  try {
    const res = await fetch(url, {
      method: http_method,
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
    });
    const recipes = await res.json();
    return recipes;
  } catch (err) {
    throw new Error("API is not available");
  }
}
export async function getData(endpoint, userToken) {
  return fetchData("GET", endpoint, userToken);
}

export async function postData(endpoint, userToken) {
  return fetchData("POST", endpoint, userToken);
}

export async function deleteRecipe(userId, recipeId, userToken) {
  return fetchData(
    "POST",
    `users/${userId}/deleteRecipe/${recipeId}`,
    userToken
  );
}
