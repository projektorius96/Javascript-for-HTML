// gives result as matrix e.g 10x10
for(var theRowToStartAt = 0 ; theRowToStartAt < 10; theRowToStartAt++) {
tBODY.insertRow(-1)[theRowToStartAt];
for(let numberOfCellsWithinEachRow = 0 ; numberOfCellsWithinEachRow < 11; numberOfCellsWithinEachRow++) {
tBODY.rows[this.theRowToStartAt].insertCell(-1);
}
}

/* */

// gives result for 0 to 9 rows
for(var i = 1 ; i < 10; i++) {
tBODY.insertRow(-1)[i];
tBODY.rows[i].insertCell(-1);
}
