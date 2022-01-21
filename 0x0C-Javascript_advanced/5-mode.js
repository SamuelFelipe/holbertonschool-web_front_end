const changeMode = ([size, weight, transform, background, color]) => {
  body = document.getElementsByTagName("body")[0].style;
  body.fontSize = size;
  body.fontWeight = weight;
  body.textTransform = transform;
  body.backgroundColor = background;
  body.color = color;
};

function main() {
  const spooky = [9, "bold", "uppercase", "pink", "green"];
  const darkMode = [12, "bold", "capitalize", "black", "white"];
  const screamMode = [12, "normal", "lowercase", "white", "black"];

  const body = document.body;
  const paragraph = document.createElement("p");
  paragraph.innerHTML += "Welcome Holberton!";
  body.appendChild(paragraph);
  const spookyButton = document.createElement("button");
  spookyButton.innerHTML = "Spooky";
  spookyButton.onclick = () => changeMode(spooky)
  const darkModeButton = document.createElement("button");
  darkModeButton.innerHTML = "Dark Mode";
  darkModeButton.onclick = () => changeMode(darkMode)
  const screamModeButton = document.createElement("button");
  screamModeButton.innerHTML = "Scream Mode";
  screamModeButton.onclick = () => changeMode(screamMode)

  body.appendChild(spookyButton);
  body.appendChild(darkModeButton);
  body.appendChild(screamModeButton);
}

main();
