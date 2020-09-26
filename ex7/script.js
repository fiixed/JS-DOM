// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp
var header = document.getElementById("section-header");
var section = document.getElementById("section");
header.addEventListener("click", function () {
  section.style.visibility == "visible" || !section.style.visibility
    ? (section.style.visibility = "hidden")
    : (section.style.visibility = "visible");
});

// header.addEventListener("click", function () {
//   section.classList.add("collapse");
// });
