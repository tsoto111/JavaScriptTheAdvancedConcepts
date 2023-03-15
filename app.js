/* ==========================================================================
    Javascript: The Advanced Concepts (Javascript Foundation II ep. 42)
    
    NOTE: This lesson discusses a wierd thing that "Classic" javascript does
          out of the box that deals with variable scope. In short, the
          'height' variable is not scoped to the weird() function. Instead,
          Javascript will create that variable in the GLOBAL scope since
          var, let, or const were not used to initialize the variable.
========================================================================== */

/* ==========================================================================
    Example 1 - Weird variable scope leekage issue.
========================================================================== */
// 'use strict' // Will prevent "leekage of global variables"
// var height = 50; // Is what the compiler will do after reading this file without 'use strict' enabled.
function weird() {
    height = 50; // Leekage of global variable since we are not using let or const
    return height;
}

console.log(weird());
  
/* ==========================================================================
    Example 2 - Playing with function scope
========================================================================== */
var heyhey = function doodle() {
  return 'heyhey';
}

console.log(heyhey());
// console.log(doodle()); // Attempting to call doodle will raise an error because the function is scoped to the variable heyhey()!