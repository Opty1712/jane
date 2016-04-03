'use strict';

export default class CollapseMenu {

    constructor () {
        this._header = document.querySelector("header");
        this._content = document.querySelector(".content-wrapper");
        this._collapsed = false;
        this._collapseNumber = 522;
        window.addEventListener("scroll", this._checkScroll.bind(this));
    }


    _checkScroll () {
        if (window.pageYOffset < this._collapseNumber && !this._collapsed) return;
        if (window.pageYOffset >= this._collapseNumber && this._collapsed) return;
        this._collapsePage ();
    }

    _collapsePage () {
        if (this._collapsed) {
            this._header.classList.remove ("collapsed");
            this._content.classList.remove ("collapsed");
            this._collapsed = false;
        } else {
            this._header.classList.add ("collapsed");
            this._content.classList.add ("collapsed");
            this._collapsed = true;
        }

    }
}


