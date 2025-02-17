function generateSong(event) {
  event.preventDefault();

  new Typewriter("#song", {
    strings: "The song will go here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let songFormElement = document.querySelector("#song-generator-form");
songFormElement.addEventListener("submit", generateSong);
