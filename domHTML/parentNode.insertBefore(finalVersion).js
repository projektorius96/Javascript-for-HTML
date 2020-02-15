// First we need to get information in NodeList way
var refNode = document.querySelectorAll("*");
// refNode as NodeList: [html, head, body]

var beforeThisNode = document.createElement("FOOTER");
// beforeThisNode is not appended yet

refNode[2].appendChild(beforeThisNode);
// [html, head, body [header is not added yet, footer]]

var currentNodeToBeAdded = document.createElement("HEADER");
// currentNodeToBeAdded is not be added yet

refNode[2].appendChild(currentNodeToBeAdded);

let LetsInsertBefore = refNode[2].insertBefore(currentNodeToBeAdded, beforeThisNode); // [html, head, body [HEADER, footer]]
// if used refNode[2].appendChild(currentNodeToBeAdded); as a result we would get [html, head, body [footer, header]] but this is not a part of our tutorial

// let LetsInsertAFTER = refNode[2].insertBefore(currentNodeToBeAdded, beforeThisNode.nextSibling); // [html, head, body [FOOTER, header]]

// ... in order to visualize new nodeList we need to refresh currentNodeList i. e. static refNode
// unfortunately, document.querySelectorAll returns static NodeList!
var refNodeRefreshed = document.querySelectorAll("*"); // this line refreshes currentNode i.e. refNode
// refNode just have been refreshed
refNodeRefreshed
// NodeList(5) [html, head, body, header, footer] only in NodeList-sorted-way. HOWEVER (SEE NEXT LINE)
// document.documentElement.firstElementChild.nextElementSibling.children shows...
// ...that in hierarchical-HTML-way children on BODY HTMLelement are: [..., body[header, footer]]

/*
// document.documentElement === html && document.documentElement.parentNode === document
document.body.childNodes[0].innerHTML = "<H1>INJECTED</H1>" // swap theoretical header HTMLelement with this...
document.body.childNodes[1].innerHTML = "<H3>INJECTED BELOW</H3>" // swap theoretical footer HTMLelement with this...
*/
