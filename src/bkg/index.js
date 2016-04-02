'use strict';

import './index.css';
import template from './index.jade';


export default class BackgroundChanger  {

    constructor (options) {
        this._elem = options.OPTIONS.elem;
        this._elem.innerHTML = template();

        this._arrImages = options.OPTIONS.images;
        this._bkgChanger1 = this._elem.querySelector ("div").querySelector ("div:nth-child(1)");
        this._bkgChanger2 = this._elem.querySelector ("div").querySelector ("div:nth-child(2)");
        this._countImg = 0;
        this._currentImg = this._bkgChanger2;

        this._bkgChanger1.classList.remove("hidden");
        this._bkgChanger1.style.backgroundImage = "url("+this._arrImages[this._countImg]+")";

        this._preloadImg ();
        setInterval (this._changeBkg.bind(this), 10000);
    }

    _preloadImg () {
        var images = [];
        for (var i = 0; i < this._arrImages.length; i++) {
            images[i] = new Image();
            images[i].src = this._arrImages[i];
        }
    }

    _changeBkg () {
        this._countImg++;
        if (this._countImg >= this._arrImages.length) this._countImg = 0;
        this._currentImg.style.backgroundImage = "url("+this._arrImages[this._countImg]+")";
        this._currentImg.classList.remove("hidden");
        this._currentImg = (this._currentImg == this._bkgChanger1) ? this._bkgChanger2 : this._bkgChanger1;
        this._currentImg.classList.add("hidden");
    }


}
