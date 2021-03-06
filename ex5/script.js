/*jshint esversion: 6 */
// Add a box to "boxContainer" everytime you click the button
// HINT: Look up createElement(), appendChild()
// HINT HINT: You can add the "box" class to elements like so: https://www.w3schools.com/howto/howto_js_add_class.asp
//var element = document.getElementById("boxContainer");

document
  .querySelector("#myButton")
  .addEventListener("click", () =>
    document
      .querySelector("#boxContainer")
      .appendChild(document.createElement("div"))
      .classList.add("box")
  );
