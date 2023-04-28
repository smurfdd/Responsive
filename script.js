

var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");

sideNav.style.right = "-250px";
menuBtn.onclick = function () {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
    }

    else {
        sideNav.style.right = "-250px";
    }
}

window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal, .left, .right');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }

}


