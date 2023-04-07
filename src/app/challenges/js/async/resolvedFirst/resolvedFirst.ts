// Utils
function getRandomPromise(name: string) {
  return new Promise(resolve => {
    setTimeout(() => resolve(name), Math.random() * 2)
  })
}

// Data
const promise1 = getRandomPromise("Dota 2")
const promise2 = getRandomPromise("CS:GO")
const promise3 = getRandomPromise("Nier: Automata")

// Implementation
// ...

// Tests
console.group("resolvedFirst")
console.log(resolvedFirst(promise1, promise2, promise3), " => ", "It should different every time.")
console.groupEnd()


export {}
