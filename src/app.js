'use strict';

require('normalize-css');
import './style.css';

require('fancybox')($);
import 'fancybox/dist/css/jquery.fancybox.css';




import SmoothScroller from './scroller.js';
var smoothScroller = new SmoothScroller();




import CollapseMenu from './collapser.js';
var collapseMenu = new CollapseMenu();






document.querySelector(".menu-mobile").addEventListener("click", openMenu);

function openMenu (event) {
    var nav = document.querySelector("nav");
    nav.classList.toggle ("active");
    event.preventDefault();

    scrollToTop ();

    hideShowLocker ();
}

function hideShowLocker () {
    var locker = document.querySelector("#locker");

    locker.classList.toggle ("active");
    if (locker.classList.contains("active")) {
        locker.style.width=window.innerWidth + "px";
        locker.style.display="block";
        document.body.style.overflow = 'hidden';
    } else {
        locker.style.display="none";
        document.body.style.overflow = 'auto';
    }
}

function scrollToTop () {
    if (window.pageYOffset > 523) return;
    window.scrollTo ("", 525);
}




document.querySelector("nav").addEventListener("click", hideMenu);

function hideMenu (event) {
    if (window.innerWidth >= 1350) return;
    if (event.target.nodeName != "A") return;
    var nav = document.querySelector("nav");
    nav.classList.remove ("active");

    hideShowLocker (event.target);
}



$(document).ready(function() {
    let arr = document.querySelectorAll(".content img");
    for (let i = 0; i < arr.length; i++) {
        let parentElem = arr[i].parentNode;
        var newElem = document.createElement('a');
        newElem.href = arr[i].src.replace("_s", "");
        newElem.className = "fancybox";
        newElem.rel = "gallery";
        newElem.appendChild(arr[i]);
        parentElem.appendChild (newElem);
    }
    $('.fancybox').fancybox();
});