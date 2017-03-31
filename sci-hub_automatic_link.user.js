// ==UserScript==
// @name        sci-hub automatic link
// @website     http://blog.dorian-depriester.fr
// @author      Dorian Depriester
// @description Automatically turns each DOI link into a new link to the corresponding document on sci-hub.cc
// @downloadURL https://github.com/DorianDepriester/doi2scihub/raw/master/sci-hub_automatic_link.user.js
// @supportURL  https://github.com/DorianDepriester/doi2scihub/issues
// @version     4
// @grant       none
// @match       *://*/*
// @run-at      document-idle
// ==/UserScript==
var els = document.getElementsByTagName("A");
for(var i = 0, l = els.length; i < l; i++) {
   var el = els[i];
   el.href = el.href.replace(/^((http(s|):\/\/|www\.)|)(dx.|)doi\.org\//gim, 'http://sci-hub.cc/');
} 
