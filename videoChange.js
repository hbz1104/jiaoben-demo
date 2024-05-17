// ==UserScript==
// @name         videoChange
// @namespace    http://tampermonkey.net/
// @version      v0.5
// @description  简单视频倍速改变
// @author       HBZ
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// @license      AGPL-3.0
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector("#container > video").playbackRate = 16;
})();