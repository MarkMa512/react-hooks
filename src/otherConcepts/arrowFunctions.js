// https://www.youtube.com/watch?v=h33Srr5J9nY

function sum(a, b) {
    return a + b
}

let sumArrow = (a, b) => a + b
// {
//     return a + b
// }

function isPostive(number) {
    return number > 0
}

let isPostiveArrow = number => number > 0
// can remove the () if there is only 1 parameter 


function randomNumber() {
    return Math.random
}

let randomNumberArrow = () => Math.random


// anonymous function: 
document.addEventListener('click', function () {
    console.log('Click')
})

// very useful for anonymous function 
document.addEventListener('click', () => console.log('Click'))

// arrow function changes the behaviour of this keyword 
class Person {
    constructor(name) {
        this.name = name
    }
    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow:' + this.name)
        }, 100)
    }
    printNameFunction() {
        setTimeout(function () {
            console.log('Function:' + this.name)
        })
    }
}

let person = new Person('Bob');
person.printNameArrow(); // prints bob
person.printNameFunction(); // prints nothing 

/**
 * inside the normal function(), this is defined by where it is called; this get redefined 
 * inside the arrow function(), this is not redefined
 */

/**
 * What is the difference between arrow  
 */