// When the user scrolls the page, fire scrollAnimationControl
window.addEventListener("scroll", scrollAnimationControl);
// Add the animated class  to the animated object when you reach its scroll position.
function scrollAnimationControl() {
    // Get the animated object from html
    var animation = document.getElementById("servicesAnimation");
    // Get the offset position of the animated object
    var position = animation.offsetTop + 170;
    if (window.pageYOffset >= position) {
        animation.classList.add("fadeInUp")
    }
}
// When the user scrolls the page, fire scrollAnimationControl
window.addEventListener("scroll", scrollAnimationControlServiceItem);
// Add the animated class  to the animated object when you reach its scroll position.
function scrollAnimationControlServiceItem() {
    // Get the animated object from html
    var animation = document.getElementById("servicesItemAnimation");
    // Get the offset position of the animated object
    var position = animation.offsetTop + 450;
    if (window.pageYOffset >= position) {
        var children =  animation.children;
        for (i = 0; i < children.length; i++) {
            children[i].classList.add("slideInLeft");
        }
        for (i = 0; i < children.length; i+=2) {
            children[i].classList.add("slideInRight");
        }
    }
}
// When the user scrolls the page, fire scrollAnimationControl
window.addEventListener("scroll", wScrollAnimationControl);
// Add the animated class  to the animated object when you reach its scroll position.
function wScrollAnimationControl() {
    // Get the animated object from html
    var animation = document.getElementById("myWorksAnimation");
    // Get the offset position of the animated object
    var position = animation.offsetTop + 800;
    if (window.pageYOffset >= position) {
        animation.classList.add("fadeInUp")
    }
}
// When the user scrolls the page, fire scrollAnimationControl
window.addEventListener("scroll", scrollAnimationControlmyWorks);
// Add the animated class  to the animated object when you reach its scroll position.
function scrollAnimationControlmyWorks() {
    // Get the animated object from html
    var animation = document.getElementById("myWorksItemAnimation");
    // Get the offset position of the animated object
    var position = animation.offsetTop + 1200;
    if (window.pageYOffset >= position) {
        animation.firstElementChild.classList.add("zoomIn");
        animation.firstElementChild.nextElementSibling.classList.add("zoomIn");
        animation.firstElementChild.nextElementSibling.nextElementSibling.classList.add("zoomIn");
    }
}
window.addEventListener("scroll", scrollAnimationControlmyWorks2row);
// Add the animated class  to the animated object when you reach its scroll position.
function scrollAnimationControlmyWorks2row() {
    // Get the animated object from html
    var animation = document.getElementById("myWorksItemAnimation");
    // Get the offset position of the animated object
    var position = animation.offsetTop + 1450;
    if (window.pageYOffset >= position) {
        animation.lastElementChild.classList.add("zoomIn");
        animation.lastElementChild.previousElementSibling.classList.add("zoomIn");
        animation.lastElementChild.previousElementSibling.previousElementSibling.classList.add("zoomIn");
    }
}

/*
 Contact animation
 */
window.addEventListener("scroll", myContactAnimationScrollAnimationControl);
// Add the animated class  to the animated object when you reach its scroll position.
function  myContactAnimationScrollAnimationControl() {
    // Get the animated object from html
    var animation = document.getElementById("myContactAnimation");
    // Get the offset position of the animated object
    var position = animation.offsetTop + 3600;
    if (window.pageYOffset >= position) {
        animation.classList.add("fadeInUp");
    }
}

window.addEventListener("scroll", formScrollAnimationControl);
// Add the animated class  to the animated object when you reach its scroll position.
function  formScrollAnimationControl() {
    // Get the animated object from html
    var animation = document.getElementById("contactForm");
    // Get the offset position of the animated object
    var position = animation.offsetTop + 3800;
    if (window.pageYOffset >= position) {
        animation.classList.add("fadeInUp", "myAdvantagesAnimationViz");
    }
}