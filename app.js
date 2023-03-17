/* ==========================================================================
    Javascript: The Advanced Concepts (Javascript Foundation II ep. 43)
    
    What is 'this' keyword?
        - 'this' is the object that the function is a property of. Thats
          it.
    
    NOTE: By default, 'this' in the browser will be the browser's 'window'
          object.
========================================================================== */
console.log(
    '------------- Example 1 -------------\n' +
    '=====================================\n' +
    'Global this var type: ' + typeof this + '\n' +
    '-------------------------------------'
);
function a() {
    console.log(
        'The \'this\' within the function a() is the \n' +
        'same: ' + this + '\n\n' +
        'That is because \'this\' is the OBJECT that the \n' +
        'FUNCTION a() is a property of. Which means the \n' +
        'GLOBAL context of \'this\' that ALL global functions \n' +
        'and variables are written to!!!'
    );
}
a();
console.log(
    '=====================================\n\n' +
    '------------- Example 2 -------------\n' +
    'How can we prevent this global assignment \n' +
    'leakage of \'this\' context into our function? \n' +
    '    - by invoking \'use scrict\' \n' +
    '=====================================\n' 
);
function b() {
    'use strict'
    console.log(
        'What is \'this\' while invoking \n' +
        '\'use strict\': ' + this
    );
}
b();

console.log(
    '=====================================\n\n' +
    '------------- Example 3 -------------\n' +
    'Practical usage of \'this\' in javascript. \n' +
    '=====================================' 
);
const obj = {
    name: 'Billy',
    sing() {
        return 'lalala ' + this.name;
    }
}
console.log(
    obj.sing() + '\n' +
    '=====================================\n\n' +
    '------------- Example 4 -------------\n' +
    'Practical example II usage of \'this\' \n' + 
    'in javascript. \n' +
    '=====================================' 
);
const obj2 = {
    name: 'Billy',
    sing() {
        return 'lalala ' + this.name;
    },
    singAgain() {
        return this.sing() + '!';
    }
}
console.log(
    obj2.singAgain() + '\n' +
    '=====================================\n\n' +
    '------------- Example 5 -------------\n' +
    'Practical example III usage of \'this\' \n' + 
    'in javascript. \n' +
    '=====================================' 
);
// The value of this within shared functions is:
//     1: Gives methods access to their object.
//     2: Executes same code for multiple objects.Y
function importantPersion() {
    console.log(this.name + '!');
}

const object1 = {
    name: 'Cassy',
    importantPersion: importantPersion
}

const object2 = {
    name: 'Jacob',
    importantPersion: importantPersion
}
object1.importantPersion();
object2.importantPersion();
console.log('=====================================');