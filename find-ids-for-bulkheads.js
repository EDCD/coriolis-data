const data = require('./dist/index.json')

function combinations(arr, k) {
  let i
  let subI
  const ret = []
  let sub
  let next
  for (i = 0; i < arr.length; i++) {
    if (k === 1) {
      ret.push([arr[i]])
    } else {
      sub = combinations(arr.slice(i + 1, arr.length), k - 1)
      for (subI = 0; subI < sub.length; subI++) {
        next = sub[subI]
        next.unshift(arr[i])
        ret.push(next)
      }
    }
  }
  return ret
}

const alphabet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'T', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const possibleIds = combinations(alphabet, 2)
console.log(`Possible IDs: ${possibleIds.length}`)
const list = []

function getId(arr) {
  if (typeof arr === 'object') {
    for (const i in arr) {
      if (typeof arr[i] === 'object' && !arr[i].id) {
        getId(arr[i])
      } else if (arr[i].id) {
        list.push(arr[i].id)
      }
    }
  }
}

getId(data)
possibleIds.forEach((elem, ind) => possibleIds[ind] = elem.join(''))

// Find 9 unused IDs for the new MKII passenger cabin modules
const names = [
  'Economy MKII Size 2', 'Economy MKII Size 3', 'Economy MKII Size 4', 'Economy MKII Size 5', 'Economy MKII Size 6',
  'Business MKII Size 3', 'Business MKII Size 4', 'Business MKII Size 5', 'Business MKII Size 6'
]
let found = 0
for (const i of possibleIds) {
  if (list.indexOf(i) === -1) {
    console.log(`Unused ID: ${i}  -> ${names[found]}`)
    found++
    if (found >= 9) break
  }
}
