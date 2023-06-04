/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction(id) {
  document.getElementById(id).classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".custom-dropbtn")) {
    let dropdowns = document.getElementsByClassName("custom-dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
