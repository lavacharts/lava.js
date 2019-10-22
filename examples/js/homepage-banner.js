import jQuery from "jquery";

jQuery($ => {
  let mouseX, mouseY;

  let traX, traY;

  $(document).mousemove(function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = (4 * mouseX) / 570 + 40;
    traY = (4 * mouseY) / 570 + 50;
    // console.log(traX);
    $(".title").css({ "background-position": traX + "%" + traY + "%" });
  });
});
