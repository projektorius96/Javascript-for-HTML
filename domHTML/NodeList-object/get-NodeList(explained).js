// Imagine we have statically created HTML content:
// We have two options as to work with: HtmlCollection or NodeList
/* Because it's small educational project and .html file content displayed below has whitespace as COMMENT_NODE we have to be broad minded
and choose a NodeList as array-like object to work with and apply DOM methods to it as more likely [native-to-DOM] code itself */

<body>
<ul><!-- REMOVE THIS COMMENT TO BE A WHITESPACE MADE BY ENTER KEY -->
    <!-- comment #text node -->
  <li>firstElementChild[HTMLcollection.children[0]]</li>
    <!-- comment #text node -->
  <li>secondElementChild[HTMLcollection.children[1]]</li>
    <!-- comment #text node -->
  <li>thirdElementChild[HTMLcollection.children[2]]</li>
    <!-- comment #text node -->
</ul>
</body>

// STEP 1: Iterate over

// Let's say we uploaded .html file with code above, and we have our browser's console window opened:

var checkAnyNodes = document.querySelectorAll("UL"); // getting reference of any NodeList we have in our .html file presented
checkAnyNodes.toLocaleString(); // double check if it's [object NodeList] we are working with
checkAnyNodes.forEach((index, item) => {console.log(index, item)}); // iterate over the NodeList we have
// Console output of the above code: <ul>...</ul> as iteration result we get 0, hereby 0 means there are only one unordered list with listed items within.

// STEP 2.1: Get different ways to access HTMLcollection array-like object in order to modify it later on if needed.

checkAnyNodes[0].innerHTML
/* We get all stuff which is inside <UL> including white space. It's important to consider white space whilst working with NodeList
because white space is also indexed and if once you will need to get Element_NODE, but you choose wrong index you probably would get white space instead
which is sometimes even not displayed. By user, that probably would be considered as error. Ususally it is just a misacknowledgment.
*/

checkAnyNodes[0].children
/*
// Console output: (3) [li, li, li]
// It's not a part of NodeList we are currently working with but HtmlCollection property
*/

checkAnyNodes[0].childNodes
// Console output: NodeList(15) [text, comment, text, li, text, comment, text, li, text, comment, text, li, text, comment, text]
// what is [text]::before [li]??? See explanation below:

checkAnyNodes[0].childNodes.item(0).textContent
// Console output: "↵    " . Be noticed that ["↵    "] is considered as [text] inside .html BUT ACTUALLY it's a new line made by ENTER key
// In order to get rid of ["↵    "] withing html content we should define content itself in sementically minified in-line way withoud ENTER keys pressed
// More information about ["↵    "]: https://stackoverflow.com/questions/21572938/what-is-the-character-in-chrome-console
// BEWARE: Comment IT IS NOT A WHITESPACE itself. IF COMMENT would be practically removed, but theoretically would stay in our mind that could be considered as whitespace

/* ========================================================================================================================================================================== */

// STEP 2.2: Get different ways to access NodeList array-like object in order to modify it later on if needed.

var checkAnyParentNodes = document.body.parentNode;
// __proto__: HTMLHtmlElement

checkAnyParentNodes.innerHTML;
// (A) Console output: we get all static HTML mirror

// (B) Other way to output all .innerHTML as [object NodeList] is a line of code below:
var getNodeListRef = document.querySelectorAll("*"); // "*" is a CSS selector that selects all elements
getNodeListRef // Console output:  [html, head, body, ul, li, li, li]

// Provide @@iterator interface
var nextOne = getNodeListRef.values();
/*
nextOne.next();
{value: html, done: false}
nextOne.next();
{value: head, done: false}
nextOne.next();
{value: body, done: false}
nextOne.next();
{value: ul, done: false}
nextOne.next();
{value: li, done: false}
nextOne.next();
{value: li, done: false}
nextOne.next();
{value: li, done: false}
nextOne.next();
{value: undefined, done: true}
*/

