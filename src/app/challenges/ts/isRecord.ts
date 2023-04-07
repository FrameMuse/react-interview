// Implementation
// ...

// Tests
console.group("isRecord")
console.log(isRecord({}), " => ", true)
console.log(isRecord([]), " => ", false)
console.log(isRecord(() => {}), " => ", false)
console.log(isRecord(Object), " => ", false)
console.log(isRecord(1), " => ", false)
console.log(isRecord("1"), " => ", false)
console.groupEnd()

export {}
