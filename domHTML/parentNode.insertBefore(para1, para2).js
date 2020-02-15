var refNode = document.querySelectorAll("*");
// refNode as NodeList: [html, head, body]
var currentNode = document.createElement("FOOTER");
// ...
refNode[2].appendChild(currentNode);
// [html, head, body], childNodes of <body>: <body><header><article></article></header></body>
var beforeThisNode = document.createElement("HEADER");

let insertedNode = refNode[2].insertBefore(beforeThisNode, currentNode);
// refNode: [html, head, body: [header, footer]]
