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
// When the user scrolls the page, fire scrollAnimationControl
window.addEventListener("scroll", sScrollAnimationControl);
// Add the animated class  to the animated object when you reach its scroll position.
function sScrollAnimationControl() {
    // Get the animated object from html
    var animation = document.getElementById("mySkillsAnimation");
    // Get the offset position of the animated object
    var position = animation.offsetTop + 1800;
    if (window.pageYOffset >= position) {
        animation.classList.add("fadeInUp");
    }
}
/*
ProgressBar + counter on scroll event
 */

var cc = 1;
$(document).scroll(function() {
    $('#skillsItem').each(function () {
        var pos = $(this).offset().top,
            topWindow = $(window).scrollTop();
        if (pos < topWindow + 500) {
            if (cc < 2){
                cc = cc + 2; // block fire scroll function
                var ctx0 = document.getElementById('my_canvas0').getContext('2d'); //access to canvas
                var ctx1 = document.getElementById('my_canvas1').getContext('2d');
                var ctx2 = document.getElementById('my_canvas2').getContext('2d');
                var ctx3 = document.getElementById('my_canvas3').getContext('2d');
                var al = 0;
                var start = 4.72; // start point of circle animation

                var cw0 = ctx0.canvas.width; //width of canvas
                var ch0 = ctx0.canvas.height; //height of canvas

                var cw1 = ctx1.canvas.width;
                var ch1 = ctx1.canvas.height;

                var cw2 = ctx2.canvas.width;
                var ch2 = ctx2.canvas.height;

                var cw3 = ctx3.canvas.width;
                var ch3 = ctx3.canvas.height;

                var diff;
                function progressSim0(){
                    diff = ((al / 100) * Math.PI*2*10).toFixed(2); // circle formula
                    ctx0.clearRect(0, 0, cw0, ch0);
                    ctx0.lineWidth = 10;
                    ctx0.strokeStyle = "#ff6868";
                    ctx0.beginPath();
                    ctx0.arc(100, 100, 80, start, diff/10+start, false);
                    ctx0.stroke();
                    if(al >= 85){
                        clearTimeout(sim0);
                        // Add scripting here that will run when progress completes ^)
                    }
                    al++;
                }
                var sim0 = setInterval(progressSim0, 20);

                function progressSim1(){
                    diff = ((al / 100) * Math.PI*2*10).toFixed(2);
                    ctx1.clearRect(0, 0, cw1, ch1);
                    ctx1.lineWidth = 10;
                    ctx1.strokeStyle = "#ff6868";
                    ctx1.beginPath();
                    ctx1.arc(100, 100, 80, start, diff/10+start, false);
                    ctx1.stroke();
                    if(al >= 65){
                        clearTimeout(sim1);
                        // Add scripting here that will run when progress completes
                    }
                    al++;
                }
                var sim1 = setInterval(progressSim1, 20);

                function progressSim2(){
                    diff = ((al / 100) * Math.PI*2*10).toFixed(2);
                    ctx2.clearRect(0, 0, cw2, ch2);
                    ctx2.lineWidth = 10;
                    ctx2.strokeStyle = "#ff6868";
                    ctx2.beginPath();
                    ctx2.arc(100, 100, 80, start, diff/10+start, false);
                    ctx2.stroke();
                    if(al >= 20){
                        clearTimeout(sim2);
                        // Add scripting here that will run when progress completes
                    }
                    al++;
                }
                var sim2 = setInterval(progressSim2, 20);

                function progressSim3(){
                    diff = ((al / 100) * Math.PI*2*10).toFixed(2);
                    ctx3.clearRect(0, 0, cw3, ch3);
                    ctx3.lineWidth = 10;
                    ctx3.strokeStyle = "#ff6868";
                    ctx3.beginPath();
                    ctx3.arc(100, 100, 80, start, diff/10+start, false);
                    ctx3.stroke();
                    if(al >= 50){
                        clearTimeout(sim3);
                        // Add scripting here that will run when progress completes
                    }
                    al++;
                }
                var sim3 = setInterval(progressSim3, 20);
            }
        }
    })
});

var ccNum = 1; //scroll function blocker
var time = 1.6; //counting time
var addOpacity = $('.skillsBlock div'); //access for css class opacity
$(window).scroll(function() {
    $('#skillsItem').each(function () {
        var pos = $(this).offset().top,
            topWindow = $(window).scrollTop();
        if (pos < topWindow + 500) {
            if (ccNum < 2) {
                addOpacity.addClass("skillsRateViz");
                $('.skillsRate').each(function () {
                    var i = 1;
                    var num = $(this).data("num"); //max number count from html
                    var step = 1000 * time / num; // counting step
                    var that = $(this);
                    var int = setInterval(function () {
                        if (i <= num) {
                            that.html(i + "%"); // output resalts of counting
                        } else {
                            ccNum = ccNum + 2; // block fire scroll function
                            clearInterval(int);
                        }
                        i++;
                    }, step);
                });
            }
        }
    });
});
/*
myAdvantages animation
 */
window.addEventListener("scroll", myAdvantagesScrollAnimationControl);
// Add the animated class  to the animated object when you reach its scroll position.
function myAdvantagesScrollAnimationControl() {
    // Get the animated object from html
    var animation = document.getElementById("myAdvantagesAnimation");
    // Get the offset position of the animated object
    var position = animation.offsetTop + 2600;
    if (window.pageYOffset >= position) {
        animation.classList.add("fadeInUp", "myAdvantagesAnimationViz");
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
    var position = animation.offsetTop + 3000;
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
    var position = animation.offsetTop + 3200;
    if (window.pageYOffset >= position) {
        animation.classList.add("fadeInUp", "myAdvantagesAnimationViz");
    }
}