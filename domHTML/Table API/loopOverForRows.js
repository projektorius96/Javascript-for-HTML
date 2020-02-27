for(var numberOfRows = 1 ; numberOfRows < 10; numberOfRows++) {
tBODY.insertRow(-1)[numberOfRows];
for(let numberOfCellsWithin = 0 ; numberOfCellsWithin < 9; numberOfCellsWithin++) {
tBODY.rows[this.numberOfRows].insertCell(-1);
}
}
// gives result as matrix e.g 10x10
