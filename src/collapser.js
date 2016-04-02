'use strict';

export default class CollapseMenu {

    constructor () {
        this._bkgDiv = document.querySelector("#bkg-changer");
        this._nav = document.querySelector("nav");
        this._content = document.querySelector(".content");
        this._logoSmall = document.querySelector(".logo-small");
        this._collapsed = false;
        window.addEventListener("scroll", this._checkScroll.bind(this));
    }


    _checkScroll () {
        if (window.pageYOffset < 733 && !this._collapsed) return;
        if (window.pageYOffset >= 733 && this._collapsed) return;
        this._collapsePage ();
    }

    _collapsePage () {
        if (this._collapsed) {
            this._bkgDiv.classList.remove ("collapsed");
            this._nav.classList.remove ("collapsed");
            this._logoSmall.classList.remove ("collapsed");
            this._content.classList.remove ("collapsed");
            this._collapsed = false;
        } else {
            this._bkgDiv.classList.add ("collapsed");
            this._nav.classList.add ("collapsed");
            this._logoSmall.classList.add ("collapsed");
            this._content.classList.add ("collapsed");
            this._collapsed = true;
        }

    }
}


