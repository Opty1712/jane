'use strict';

require('normalize-css');
import './style.css';


import BackgroundChanger from './bkg';
var bkgChanger = new BackgroundChanger({
    "OPTIONS" : OPTIONS
});




import SmoothScroller from './scroller.js';
var smoothScroller = new SmoothScroller();




import CollapseMenu from './collapser.js';
var collapseMenu = new CollapseMenu();



if (location.href.indexOf("#") == -1) {
    let showObj = document.querySelector("a[name=start]");
    setTimeout (()=> showObj.scrollIntoView(false), 500);
}




document.querySelector(".menu-mobile").addEventListener("click", openMenu);

function openMenu (event) {
    var nav = document.querySelector("nav");
    nav.classList.toggle ("active");
    event.preventDefault();

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




document.querySelector("nav").addEventListener("click", hideMenu);

function hideMenu (event) {
    if (window.innerWidth >= 1350) return;
    if (event.target.nodeName != "A") return;
    var nav = document.querySelector("nav");
    nav.classList.remove ("active");

    hideShowLocker (event.target);
}