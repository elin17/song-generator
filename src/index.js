function displayRecipe(response) {
  console.log("Recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  //build the API Url
  let apiKey = "f9637fbe40fo43a051a477t366b0ae24";
  let prompt = `User Instructions: Generate a delicious recipe about ${instructionsInput.value}`;
  let context =
    "You are a cooking master and you can create recipes with any ingredient given to you. Please follow the user's instructions and provide a recipe with the main ingredient that the user has entered. Please make sure to write the name of the dish first and then add </br>. Then list the ingredients (itemized) and add </br> after each ingredient. Then add </br></br> and then list the cooking steps (numbered with each step), putting </br> after each step. Please sign it at the end with 'Goodluck and enjoy! 🥘' in <strong>.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  //make a call to the api

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">👩🏻‍🍳👨🏽‍🍳 Generating recipe for ${instructionsInput.value}</div>`;

  console.log("Generating recipe");
  console.log(`Generating ${prompt}`);
  console.log(`Generating ${context}`);
  axios.get(apiUrl).then(displayRecipe);
  //display a generated poem
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
