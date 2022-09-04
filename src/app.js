/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let excuse = "mi perro se lo comio";
  let excuseP = document.querySelector("#excuse");
  excuseP.textContent = excuse;
  console.log("Hello Rigo from the console!");
};
