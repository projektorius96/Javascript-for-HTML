var customValue;
function resToVar(x) {return this.customValue = x;}
resToVar(5);
console.log(customValue); // 5
