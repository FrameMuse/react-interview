// Data
const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const expectedArrayByBoolean = [2, 4, 6, 8]
const expectedArrayMoreThan4 = [5, 6, 7, 8, 9]

// Implementation
// ...

// Tests

console.group("filter")
console.log(filter(testArray, Boolean), " => ", expectedArrayByBoolean)
console.log(filter(testArray, item => item > 4), " => ", expectedArrayMoreThan4)
console.groupEnd()

export {}
