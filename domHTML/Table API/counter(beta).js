var myTable = document.querySelector("#myTable");
var index = 0; // must be global
// well formed counter
function checkIt(booleanIs) {
if (true) {
return index++
}
}

function invokedTable(color, checkIt) {
return checkIt;
for (i = 0; i < myTable.rows.length; i++) {
myTable.rows[i].cells[checkIt].style.backgroundColor = color;
}}

invokedTable("yellow", checkIt(true));
