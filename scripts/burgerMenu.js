// Burger script
function burger(sidebar, blur) {
  const style = {
    sidebar: (document.getElementById("sidebar").style.display = sidebar),
    headerPart1: (document.getElementById("nav-list-left").style.filter = blur),
    headerPart2: (document.getElementById("nav-list-middle").style.filter = blur),
    burger: (document.getElementById("burger").style.filter = blur),
    contentBackground: (document.getElementById("content").style.filter = blur),
    footerBackground: (document.getElementById("footer").style.filter = blur),
  };

  return style;
}

