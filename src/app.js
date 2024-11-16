/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Arrays of domain name parts
const adjectives = ["Cool", "Amazing", "Innovative", "Super", "Creative"];
const nouns = ["Tech", "Web", "Solutions", "Studio", "App", "Guru"];
const extensions = [".com", ".net", ".io", ".org"];

// Function to generate a random domain name
function generateDomain() {
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomExtension =
    extensions[Math.floor(Math.random() * extensions.length)];
  const domainName = randomAdjective + randomNoun + randomExtension;
  document.getElementById("generated-domain").textContent = domainName;
}

window.onload = function() {
  document.getElementById("button").onclick = generateDomain;
};
