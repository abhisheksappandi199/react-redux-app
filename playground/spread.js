const numbers = [10,20,30,40,50]
// Array Example
// es5
// const result = [] , loop over numbers, push each item in result
// const result = [].concat(numbers)
// const result = numbers.slice(0)

// es6 using spread operator - is a substitute for the above code using es6
const result = [...numbers]
console.log(result)


// Object Example 
const person = {
    id: 1,
    name: 'arjun',
    city: 'bangalore'
}

const obj = {
    city: 'mysore'
}

// es5 - new object, with existing props from other objects
const newPerson = Object.assign({}, person, obj)
console.log(newPerson)

// es6 - Object Spread
const newObj = {...person, ...obj}
console.log(newObj)
