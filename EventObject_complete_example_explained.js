// FIRST WE ALWAYS HAVE TO GAIN ACCESS to HTML via JS built-in methods such as document.getElementById()...
//... in order to succeed this, we have to follow part A and part B afterwards

// PART A (see below)
// ...addEventListener syntax (for JS-side, GOOD PRACTICE):
// JSvariable.addEventLisener('event','functionName',[Boolean]);
    // let JSvariable = document.getElementbyId('htmlElementOneSelected')
    // JSvariable.addEventLisener('event','functionName',[Boolean]);
    
// ...addEventListener syntax (for HTML-side, BAD PRACTICE)
// HTMLelement.addEventListener('event','functionName',[Boolean]);
    // document.getElementbyId('htmlElementOneSelected').addEventLisener('event','functionName',[Boolean]);
    // NOTICE: NO JSvariable.getElem... NEDEEDED tho.

// WHEN PART A is COMPLETED we HAVE TO FOLLOW PART B

// PART B (see below)
// .addEventListener (a.k.a eListener) + function eHANDLER = Event Object (see below steps 1 and 2 (2.1 and 2.2))

// [STEP 2 START HERE]
// 2.1 step _if we want to apply eventObject methods and properties (MEANT FOR eventDelegation)
/* function eHandler(refPara, someCustomParameterToBeModified) {
var objTarget = refPara.[eventProperty]; // objTarget is now in a referance with event Object | [eventPropery] is not a part of syntax!
var objTarget = refPara.target.style.color = "red";
objTarget = herebyInstertEDParameterBeModified2020.[eventProperty];
} */

// 2.2 step _if we DO NOT want to apply eventObject methods and properties (MEANT FOR NO eventDelegation)
// 2.2.1 _if eHandler has noParameters
/* function eHandler(if noParameters when eventDelegation is not available, logically) {
/* ...DO SOME THINGS for JSvariable 
which is in reference with some HTML element being affected in nearly future...  
} */

// 2.2.2 _if eHandler has someParameters but eventDelegation is disabled
/* function eHandler() {
/* ...DO SOME THINGS for JSvariable 
which is in reference with some HTML element being affected in nearly future... 
} */
// [STEP 2 ENDS UP HERE]

// [STEP 1 STARTS HERE]
// 1 step _if eHandler of eListener has noParameters
// variable.addEventListener('event','eHandler', false);

// 1.1 step _if eHandler of eListner has someParameters AND we want to apply eventDelegation
// variable.addEventListener('event', function (refPara) { eHandler (refPara, 10); }, false);

// 1.2 step _if eHandler of eListner has someParameters BUT we DO NOT want to apply eventDelegation
// variable.addEventListener('event', function (herebyInsertSomeParameter2019) { eHandler (someCustomParamter); }, false);
// [STEP 1 ENDS UP HERE]

// EVENT OBJECT IS CREATED AND USED ONLY FOR EVENT DELEGATION
