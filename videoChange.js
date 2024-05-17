// ==UserScript==
// @name         videoChange
// @namespace    http://tampermonkey.net/
// @version      v0.4
// @description  简单视频倍速改变
// @author       HBZ
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// @license      AGPL-3.0
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let d1 = document.getElementById('container');
    let v1 = d1.getElementsByTagName('video');
    v1.playbackRate = 16;
    console.log(v1);
})();