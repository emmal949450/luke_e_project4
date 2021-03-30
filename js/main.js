// JavaScript Document

(function(){
	"use strict";
	console.log("fired");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burgerCon")

	function menu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	button.addEventListener("click", menu);

})();