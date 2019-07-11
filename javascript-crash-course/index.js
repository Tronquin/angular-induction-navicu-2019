// Var, Let, Const 


//Array Methods 

let arr = [{value: 1}, {value: 3}, {value: 9}, {value: 2}, {value: 1}];

/* Classic Methods (Mutate the array)

    arr.push(...items) – adds items to the end,
    arr.pop() – extracts an item from the end,
    arr.shift() – extracts an item from the beginning,
    arr.unshift(...items) – adds items to the beginning.
    arr.splice() – Añade o elimina elementos de un array.
*/

/* ES6 New Methods (Functional, no mutation)
    arr.concat() – equivalent to push() method, but does not mutate original array
    arr.filter(params => condition) – euivalent to pop() method, but does not mutate original array 
    arr.map(params => functionToApply) – create a new array with the result of a function executed on every item of the original array
    arr.reduce(params => functionToApply) – allows us to transform that array on anything else, including a scalar, a function, a boolean, an object.
*/

//-------------------------------------------------------------------------------------------

//Object Methods
let objectArr = { 
    value: [1,2],
    value2: [1,6],
    value3: [1,4],
    value4: [1,2],
    value5: [1,3],
}

/* Object.assign()
    const temp = { color: [1, 49]}
    const objectArr2 = Object.assign({}, objectArr, temp)
*/

//-------------------------------------------------------------------------------------------

/* Arrow Functions
    let f = (x) => x * 2
    console.log(f(2)) 
*/

//-------------------------------------------------------------------------------------------

/* Date and Time 
    https://javascript.info/date
*/

//-------------------------------------------------------------------------------------------

/* Spread Operator (Objects and Arrays)
    https://flaviocopes.com/javascript-spread-operator/
*/

//-------------------------------------------------------------------------------------------

/* Recursion https://javascript.info/recursion
    //Fibonacci Serie
    let f = (n) => n <= 1 ? 1 : f(n-1) + f(n-2)
    console.log(f(10))
    
*/

//-------------------------------------------------------------------------------------------

/* Closure https://javascript.info/closure
*/

//-------------------------------------------------------------------------------------------

/* Composition
 Composition is how we generate a higher order function, by combining simpler functions.
 obj.doSomething()
   .doSomethingElse()

   or

obj.doSomething(doThis())
*/

/* Functions as (ARE) Objects https://javascript.info/function-object
*/

/* Prototype Inheritance https://javascript.info/prototype-inheritance 
*/