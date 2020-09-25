/*jshint esversion: 6 */
// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

const button = document.querySelector("#myButton");
const buttonDivs = document.querySelectorAll(".box");

buttonDivs.forEach((div) =>
  button.addEventListener("click", function () {
    div.style.backgroundColor = "blue";
  })
);
