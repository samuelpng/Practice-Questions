let str = "AAAAVVDEE"

console.log('hi')

let frequency = {}

for (let s of str) {
    if (!frequency[s]) {
        frequency[s] = 1
    } else {
        frequency[s] = frequency[s] + 1
    }
}

let max = 0
let maxChar = ""

for (let f in frequency) {
    console.log(frequency[f])
    if (frequency[f] > max) {
        max = frequency[f]
        maxChar= f
    }
}

console.log(maxChar)


// console.log(frequency)