// Data
const personal = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jack" },
  { id: 4, name: "Jill", age: 20 }
]
const companies = [
  { company: "Google", worth: 0.9, hasOwnOS: true },
  { company: "Apple", worth: 0.5, hasOwnOS: true },
  { company: "Microsoft", worth: 0.3, hasOwnOS: true },
  { company: "Amazon", worth: 0.2, hasOwnOS: false },
  { company: "Facebook", worth: 0.1 }
]

// Implementation
function selectArrayElement() {}

// Tests
console.group("selectArrayElement")
console.log(selectArrayElement(personal, "name"), " => ", ["John", "Jane", "Jack", "Jill"])
console.log(selectArrayElement(companies, "company"), " => ", ["Google", "Apple", "Microsoft", "Amazon", "Facebook"])
console.log(selectArrayElement(personal, "age"), " => ", [undefined, undefined, undefined, 20])
console.log(selectArrayElement(companies, "hasOwnOS"), " => ", [true, true, true, false, undefined])
console.groupEnd()

export {}
