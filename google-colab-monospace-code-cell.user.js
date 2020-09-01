// ==UserScript==
// @name         Google Colab Monospace Code Cell
// @namespace    https://github.com/comicat-hu
// @version      0.1
// @description  set font to 'Consolas' in code cell
// @author       comicat
// @match        https://colab.research.google.com/drive/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/comicat-hu/userscripts/master/google-colab-monospace-code-cell.user.js
// @downloadURL  https://raw.githubusercontent.com/comicat-hu/userscripts/master/google-colab-monospace-code-cell.user.js
// ==/UserScript==

(function() {
    'use strict';
    setInterval(function() {
        let viewlines = document.querySelectorAll('div.view-lines');
        if (viewlines) {
            viewlines.forEach(function (el) {
                el.style.fontFamily = 'Consolas';
            });
        }
    }, 2000);
})();
