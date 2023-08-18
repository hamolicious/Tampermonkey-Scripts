// ==UserScript==
// @name         Forgotify Play directly on Spotify
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Open desktop Spotify already pointing to the song.
// @author       hamolicious
// @match        https://forgotify.com/player.cfm
// @icon         https://www.google.com/s2/favicons?sz=64&domain=forgotify.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

		const removePrefix = (value, prefix) =>
      value.startsWith(prefix) ? value.slice(prefix.length) : value;

		const url = document.getElementById("player-iframe").attributes.src;
		const uri = removePrefix(url.textContent.split("&")[0].split("/").pop(), '?uri=');
		const actionURL = `spotify://play/${uri}`
		const elem = document.createElement("a");
		elem.href = actionURL;
		elem.innerText = "Play on Spotify";

		const controls = document.getElementsByClassName("controls")[0];
		controls.insertAdjacentElement(
      "beforeend",
			elem
    );
})();