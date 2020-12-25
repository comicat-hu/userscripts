// ==UserScript==
// @name         Auto Close Ehrd Class Countdown
// @namespace    https://github.com/comicat-hu
// @version      0.1
// @description  cancel the fxxking countdown
// @author       comicat
// @match        http://ehrd.104.com.tw/cltcms/play-index-home.do?type=timeout_warning
// @grant        none
// @updateURL    https://raw.githubusercontent.com/comicat-hu/userscripts/master/auto-close-ehrd-class-countdown.user.js
// @downloadURL  https://raw.githubusercontent.com/comicat-hu/userscripts/master/auto-close-ehrd-class-countdown.user.js
// ==/UserScript==

(function() {
    'use strict';
    window.currentsecond = 999;
    let s = setTimeout(function () {
        console.log('close countdown');
        window.preHandleAction();
        window.setFlag(1);
        window.postHandleAction(0);
    }, 2000);
})();
