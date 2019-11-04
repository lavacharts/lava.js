/* eslint-disable no-mixed-operators,no-undef */

/**
 * This parallax effect was found on https://freefrontend.com/css-text-effects/
 *
 * @author Robert Borghesi
 * @link https://codepen.io/dghez/pen/ItxKE/
 */
jQuery($ => {
  $(document).on("mousemove", ({ pageX: mouseX, pageY: mouseY }) => {
    const traX = (4 * mouseX) / 570 + 40;
    const traY = (4 * mouseY) / 570 + 50;

    $(".title").css({ "background-position": traX + "%" + traY + "%" });
    $(".subtitle").css({ "background-position": traX + "%" + traY + "%" });
  });
});
