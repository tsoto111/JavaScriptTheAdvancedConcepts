/* ==========================================================================
    Javascript: The Advanced Concepts (Javascript Foundation II ep. 43)
    
    IIFE (immediately involked function expression)
========================================================================== */

console.log(
    '------------- Example 1 -------------\n' +
    '====================================='
);
// I use to recognize this as a no conflict wrapper.
// All library code will exist in its own scope to prevent
// naming conflicts.
(function() { // This isn't a function declaration, but a functional expression. ()();
    // This inner function is an anonymous function definition. function(){}
    console.log('Hello from my IIFE!');
})();

// What is the benefit? 
//     - All variables defined in an IIFE will be scoped to that IIFE
console.log(
    '=====================================\n\n' +
    '------------- Example 2 -------------\n' +
    '=====================================\n' +
    'We will declare a new variable z and\n' + 
    'function a().\n'
);
var z = 1;
function a() {
    return 5;
}
console.log(
    'Var z: ' + z + '\n' +
    'Function a: ' + a() + '\n' +
    '-------------------------------------\n' +
    'We will re-declare a new variable z and function \n' + 
    'a(). Notice that our old variable and funnction \n' +
    'will now get replaced! \n'
);
var z = 1000;
function a() {
    return 'hahahahahah';
}
console.log(
    'Var z: ' + z + '\n' +
    'Function a: ' + a() + '\n\n' +
    'Now, this is a problem because we have illustrated a \n' +
    'namespace conflict. In the wild, imagine one developer \n' +
    'overwriting another developer\'s function by re-using \n'  +
    'the same variable or function name unintentionally. This \n' +
    'would break code in places the second developer wasn\'t \n' + 
    'working on. \n' +
    '=====================================\n\n' +
    '------------- Example 3 -------------\n' +
    '=====================================\n' +
    'How can we fix this? \n'
);

var script1 = (function() {
    function a() {
        return 5;
    }

    return {a: a()};
})();

function a() {
    return 'hahhaha';
}

console.log(
    'Global function a(): ' + a() + '\n' +
    'IIFE scoped function a(): ' + script1.a + '\n\n' +
    'Note that scoping the a function into the script1 \n' + 
    'variable only pollutes the global namespace once but \n' +
    'will encapsulate all of the functions within it \n' +
    'via the returned object. jQuery use to do this \n' +
    'way back in the day. This example is an introduction \n' +
    'to a future lesson called "Modules." \n'
);
