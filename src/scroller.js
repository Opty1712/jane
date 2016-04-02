'use strict';

export default class SmoothScroller {

    constructor () {
        this._menuObj = document.querySelector(".menu");
        this._menuObj.addEventListener ("click", this._initSmoothScroll.bind(this));

        this._pageHeightConst = this._pageHeight ();
        this._stepDown = 70;
        this._stepUp = -this._stepDown;
        this._step = this._stepDown;
        this._side = "down";
        this._endOfThePage = 0;

        this._shiftNormal = 250;
        this._shiftMobile = 100;
        this._shift = this._shiftNormal;
        window.addEventListener ("resize", this._changeShift.bind(this));
        this._changeShift();
    }

    _smoothScroll (event) {
        let nextStep = window.pageYOffset + this._step;

        if (nextStep > this.scrollEnd && this._side == "down") nextStep = this.scrollEnd;
        if (nextStep < this.scrollEnd && this._side == "up") nextStep = this.scrollEnd;

        window.scrollTo(0, nextStep);

        if (this._side == "up" && window.pageYOffset > this.scrollEnd) {
            requestAnimationFrame(this._smoothScroll.bind(this));
        }

        if (this._side == "down" && window.pageYOffset < this.scrollEnd && window.pageYOffset != this._endOfThePage) {
            this._endOfThePage = window.pageYOffset;
            requestAnimationFrame(this._smoothScroll.bind(this));
        }

    }

    _initSmoothScroll (event) {
        event.preventDefault();
        let target = event.target;
        if (target.nodeName != "A") return;

        history.pushState('', '', target.getAttribute("href"));
        let href = target.getAttribute("href").substring(1);
        let to = document.querySelector("a[name="+href+"]");

        this.scrollEnd = this._getCoords(to) - this._shift;

        if (window.pageYOffset > this.scrollEnd) {
            this._side = "up";
            this._step = this._stepUp;
        } else {
            this._side = "down";
            this._step = this._stepDown;
        }

        requestAnimationFrame(this._smoothScroll.bind(this));
    }

    _getCoords(elem) {
        var box = elem.getBoundingClientRect();
        return box.top + pageYOffset;
    }

    _pageHeight () {
        var scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        return scrollHeight;
    }

    _changeShift () {
        if (window.innerWidth < 1350) {
            this._shift = this._shiftMobile;
            /*hardcoding for yndex-maps
            document.querySelector (".yandex-maps").style.width = window.innerWidth - 80 + "px";
            */
        } else {
            this._shift = this._shiftNormal;
            /*hardcoding for yndex-maps
            document.querySelector (".yandex-maps").style.width = "1280px";
            */
        }

    }

}