// Data
const testArray = [{ value: 0 }, { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }, { value: 6 }, { value: 7 }, { value: 8 }, { value: 9 }]
const expectedArrayNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const expectedArrayBooleans = [false, true, true, true, true, true, true, true, true, true]

// Implementation
// ...

// Tests

console.group("map")
console.log(map(testArray, item => item.value), " => ", expectedArrayNumbers)
console.log(map(testArray, Boolean), " => ", expectedArrayBooleans)
console.groupEnd()

export {}
