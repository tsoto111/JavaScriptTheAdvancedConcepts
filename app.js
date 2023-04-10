/* ==========================================================================
    Javascript: The Advanced Concepts (Javascript Foundation II ep. 48)
========================================================================== */
console.log(
    '------------- Example 1 -------------\n' +
    'Given this examples code logic, we can see the following \n' +
    'output which illustrates the changing on the lexical \n' +
    'scope depnding on the call chain. \n'
);
const a = function() {
    console.log('Log in A: ' + this);
    const b = function() {
        console.log('Log in B: ' + this);
        const c = {
            hi: function () {
                console.log('Log in hi() ' + this);
            }
        }
        c.hi();
    }
    b();
}
a();
console.log(
    '\n' +
    'Note that both A and B functions \n' +
    'this scope is global. But, when we call \n' +
    'the c object\'s hi function... this scope \n' +
    'becomes c\'s object and is no longer global!\n' +
    '====================================='
);

console.log(
    '------------- Example 2 -------------\n' +
    'In this example, if ran in the browser, we \n' +
    'should see anotherFunk return the global Window \n' +
    'object instead of the obj constant we defined.\n' +
    'Side note, this is not true if ran using npm.\n'
);
const obj = {
    name: 'Billy', 
    sing() {
        console.log('Log in obj: ' + this);

        var anotherFunk = function() {
            console.log('Log in aontherFunk: ' + this); // This here, will return the Window object in the browser...
        }

        // NOTE: You can fix the "global" lexical confusion by using the following ES5 syntax
        var anotherFunkII = () => {
            console.log('Log in anotherFunkII: ' + this);
        };

        anotherFunk();
        anotherFunkII();
    }
}

obj.sing();
console.log(
    '\n' +
    'In Javascript, our LEXICAL SCOPE (available \n' +
    'data + variables where the function was defined) \n' +
    'determines our available variables. Not where the \n' + 
    'function is called (dynamic scope).\n' +
    '====================================='
);