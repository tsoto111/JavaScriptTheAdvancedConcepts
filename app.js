/* ==========================================================================
    Javascript: The Advanced Concepts (Javascript Foundation II ep. 43)
    
    Function vs Block Scope
========================================================================== */

/* =================================================
    Function Scope (Classic JS)
    Normally in JavaScript, variables defined within
    a function's scope can not exist outside of the
    function.
================================================= */
function a() {
    var secret = '12345';
}
  
console.log(secret);
  
/* =================================================
    Block Scope (Classic JS)
================================================= */
// Normally in JavaScript, variables defined within
// a code bock will exist
// outside of the block.
if (5 > 4) {
    var secret = '12345';
}

console.log(secret);

// With ES6, if you use let or const... the defined
// variable will be scoped inside of the code block.