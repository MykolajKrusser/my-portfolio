/**
 * Created by Nicolas on 23/12/2017.
 */
// When the user scrolls the page, fire scrollSticky
window.onscroll = function () {scrollSticky()};
// Get the navigation bar from html
var nav = document.getElementById("nav");
// Get the offset position of the  navigation bar
var sticky = nav.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollSticky() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky");
        nav.firstElementChild.lastElementChild.classList.add("pulse");

    } else {
        nav.classList.remove("sticky");
    }
}