// slider carousel control
$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 24,
  nav: true,
  dots: true,
  autoWidth: true,
  autoHeight: true,
  item: 1,
  smartSpeed: 1500,
  animateIn: "linear",
  animateOut: "linear",
  navText: [
    "<span class='owl-nav__arrowLeft'></span>",
    "<span class='owl-nav__arrowRight'></span>",
  ],
  touchDrag: false,
  mouseDrag: false,
  /*responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1920: {
        items: 2
      }
    }*/
});
