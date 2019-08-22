// use only for console.log testing purposes of [object Window] on browser console window

function eHandler(eventObjectParameterGoes1st) {
/* var objTarget = eventObjectParameterGoes1st.target;
objTarget.style.backgroundColor = "yellow"; */ 
eventObjectParameterGoes1st.target.style.backgroundColor = "yellow"; // _if using shortcut
}

var variableWin = this; // keyword THIS represent [object Window] in JS

variableWin.addEventListener('mouseover', function (eventObjectParameterGoes1st) { 
eHandler (eventObjectParameterGoes1st); }, false);