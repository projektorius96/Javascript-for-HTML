function constructorDOM(tagName, someText, outputTag) {
var nodeTypeElement = document.createElement(tagName); // create <p>
var nodeTypeElementText = document.createTextNode(someText); // please insert text 'tested'
nodeTypeElement.appendChild(nodeTypeElementText); // this line inserts nodeTypeElementText inside nodeTypeElement
/* var element = document.getElementById("body-content"); this line shows alternative way of outputting reference result */
var output = document.getElementById(outputTag); // get reference to h1
output.appendChild(nodeTypeElement); // select h1 as first parent outputTag in order to output result
}

// content-div gets you red colored result || content-h1 gets you green colored result
constructorDOM("p", 'Howdy', "content-div");
