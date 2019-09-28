function showPosition(e) {
  e.value = console.log('X coordinate: ' + e.pageX); // cx.value <= eventRegisteredData [X]
  e.value = console.log('Y coordinate: ' + e.pageY); // cy.value <= eventRegisteredData [Y]
if (e.pageX, e.pageY) {alert("Open console to see coords!")}
}
document.body.addEventListener('click', function (e) { 
showPosition (e); }, false);
