'use strict';

import './style.less';

export default class Menu {
    constructor(who) {
        this.elem = document.createElement('div');
        this.elem.className = 'menu';
        this.elem.innerText = 'this menu:' + who;
    }
}