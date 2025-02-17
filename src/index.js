function displaySong(response) {
  console.log("Song generated");
  new Typewriter("#song", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateSong(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  //build the API Url
  let apiKey = "f9637fbe40fo43a051a477t366b0ae24";
  let prompt = `User Instructions: Generate lyrics to a song about ${instructionsInput.value}`;
  let context =
    "You are a music genius and can compose beautiful lyrics to any song. Please follow the user's instructions and provide the chorus lyrics to a song (only four lines) that the user is requesting for. Please sign it at the end with 'By Elin DR' in <strong>.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  //make a call to the api

  let songElement = document.querySelector("#song");
  songElement.classList.remove("hidden");
  songElement.innerHTML = `<div class="generating">⏳ Generating song about ${instructionsInput.value}</div>`;

  console.log("Generating song");
  console.log(`Generating ${prompt}`);
  console.log(`Generating ${context}`);
  axios.get(apiUrl).then(displaySong);
  //display a generated poem
}

let songFormElement = document.querySelector("#song-generator-form");
songFormElement.addEventListener("submit", generateSong);
