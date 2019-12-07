// Imagine we have statically created HTML content:
// We have two options as to work with: HtmlCollection or NodeList
/* Because it's small educational project and .html file content displayed below has whitespace as COMMENT_NODE we have to be broad minded
and choose a NodeList as array-like object to work with and apply DOM methods to it as more likely [native-to-DOM] code itself */
/*
<body>
<ul>
    <!-- whitespace specifically comment text node -->
  <li>firstElementChild[0Index]</li>
    <!-- whitespace specifically comment text node -->
  <li>secondElementChild[1Index]</li>
    <!-- whitespace specifically comment text node -->
  <li>thirdElementChild[2Index]</li>
    <!-- whitespace specifically comment text node -->
</ul>
</body>

// STEP 1: Iterate over

*/

// Let's say we uploaded .html file with code above, and we have our browser's console window opened:
/*
var checkAnyNodes = document.querySelectorAll("UL"); // getting reference of any NodeList we have in our .html file presented
checkAnyNodes.toLocaleString(); // double check if it's [object NodeList] we are working with
checkAnyNodes.forEach((index, item) => {console.log(index, item)}); // iterate over the NodeList we have
// Console output of the above code: <ul>...</ul> as iteration result we get 0, hereby 0 means there are only one unordered list with listed items within
*/

// STEP 2: Get different way to access array-like object in order to modify it later on


/*
checkAnyNodes[0].innerHTML
/* We get all stuff which is inside <UL> including white space. It's important to consider white space whilst working with NodeList
because white space is also indexed and if once you will need to get Element_NODE, but you choose wrong index you probably would get white space instead
which is sometimes even not displayed. By user, that probably would be considered as error. Ususally it is just a misacknowledgment.
*/ 
*/
/*
checkAnyNodes[0].childNodes
// Console output: NodeList(15) [text, comment, text, li, text, comment, text, li, text, comment, text, li, text, comment, text]
*/
