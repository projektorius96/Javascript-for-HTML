// use only for console.log testing purposes of [object Window] on browser console window

function eHandler(e, addCustomColor) {
var objTarget = e.target;
objTarget.style.backgroundColor = addCustomColor;}

var variableWin = this; // keyword THIS represent [object Window] in JS

variableWin.addEventListener('mouseover', function (e) { 
eHandler (e, 'yellow'); }, false);