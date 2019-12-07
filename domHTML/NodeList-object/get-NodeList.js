// Imagine we have statically created HTML content:
// We have two options as to work with: HtmlCollection or NodeList
// Beca
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
var checkAnyNodes = document.querySelectorAll("UL");
checkAnyNodes.toLocaleString(); // double check if it's [object NodeList] we are working with
checkAnyNodes.forEach((index, item) => {console.log(index, item)}); // iterate over NodeList
// Console output of the above code: <ul>...</ul> as iteration result we get 0, hereby 0 means there are only one unordered list with listed items within
*/
