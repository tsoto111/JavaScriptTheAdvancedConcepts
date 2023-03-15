/* ==========================================================================
    Javascript: The Advanced Concepts (Javascript Foundation II ep. 43)
    
    Block Scope
========================================================================== */

// Note: Classic JavaScript's block scope for a loop.
//       The final print statement will log the final
//       int value after the loop was broken out of.
console.log('------------- Example 1 -------------');
console.log('=====================================');
function loop() {
    for(var i = 0; i < 5; i++) {
        console.log('Inner Loop: ' + i);
    }

    console.log('final: ' + i);
}

loop();
console.log('=====================================');

// NOTE: ES6 Block based scoping using let via the 
//       variable definition of the index variable
//       'i'.
console.log(' ');
console.log('------------- Example 2 -------------');
console.log('=====================================');
function loop() {
    for(let i = 0; i < 5; i++) {
        console.log('Inner Loop: ' + i);
    }

    // Note: This log will now raise an error because
    //       the usage of 'let i' in the loop scopes
    //       the 'i' variable to the loop's code block
    //       ONLY. It will now not exist outside of
    //       that code block! 
    // console.log('final: ' + i);
}

loop();
console.log('=====================================');