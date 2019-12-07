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

*/

// Let's say we uploaded .html file with code above, and we have our browser's console window opened:
/*
var checkAnyNodes = document.querySelectorAll("UL"); // getting reference of any NodeList we have in our .html file presented
checkAnyNodes.toLocaleString(); // double check if it's [object NodeList] we are working with
checkAnyNodes.forEach((index, item) => {console.log(index, item)}); // iterate over the NodeList we have
// Console output of the above code: <ul>...</ul> as iteration result we get 0, hereby 0 means there are only one unordered list with listed items within
*/
