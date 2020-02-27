// gives result as matrix e.g 10x10
for(var numberOfRows = 1 ; numberOfRows < 10; numberOfRows++) {
tBODY.insertRow(-1)[numberOfRows];
for(let numberOfCellsWithin = 0 ; numberOfCellsWithin < 9; numberOfCellsWithin++) {
tBODY.rows[this.numberOfRows].insertCell(-1);
}
}

/* */

// gives result for 0 to 9 rows
for(var i = 1 ; i < 10; i++) {
tBODY.insertRow(-1)[i];
tBODY.rows[i].insertCell(-1);
}
