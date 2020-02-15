var refNode = document.querySelectorAll("*");
// refNode as NodeList: [html, head, body]
var beforeThisNode = document.createElement("FOOTER");
// beforeThisNode is not appended yet
refNode[2].appendChild(beforeThisNode);
// [html, head, body, ..., footer]

var currentNodeToBeAdded = document.createElement("HEADER");
// currentNodeToBeAdded is not be added yet

let LetsInsertBefore = refNode[2].insertBefore(currentNodeToBeAdded, beforeThisNode); // [html, head, body, HEADER, footer]

// let LetsInsertAFTER = refNode[2].insertBefore(currentNodeToBeAdded, beforeThisNode.nextSibling); // [html, head, body, FOOTER, header]

// ... in order to visualize new nodeList we need to refresh currentNodeList i. e. static refNode
// unfortunately, document.querySelectorAll returns static NodeList!
var refNodeRefreshed = document.querySelectorAll("*"); // this line refreshes currentNode i.e. refNode
// refNode just have been refreshed
refNodeRefreshed
// NodeList(5) [html, head, body, header, footer]
