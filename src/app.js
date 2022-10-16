/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here()

  document.querySelector("#excuse").innerHTML = generateDomain();
  console.log("Hello Rigo from the console!");
};

let generateDomain = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = [".com", ".org"];

  for (let i in pronoun) {
    console.log(pronoun[i] + adj[i] + noun[i] + extensions[i]);
  }

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let extensionIndex = Math.floor(Math.random() * extensions.length);

  return `${pronoun[pronounIndex]}${adj[adjIndex]}${noun[nounIndex]}${extensions[extensionIndex]}`;
};
