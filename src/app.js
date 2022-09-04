/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird", "A porcupine"];

  let action = ["ate", "peed", "crushed", "broke", "hid"];

  let what = ["my homework", "the keys", "the car", "my phone", "the TV"];

  let when = [
    "before the class",
    "when I was outside",
    "watching a movie",
    "during my lunch",
    "while I was praying"
  ];

  let excuse = document.querySelector("#excuse");

  excuse.textContent =
    who[Math.floor(Math.random() * who.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)] +
    "!";

  console.log("My Excuse Generator!");
};
