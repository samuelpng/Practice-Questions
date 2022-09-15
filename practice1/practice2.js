// takes in a String converts to lower case

// Test Case
// Test => test
// aaaa => aaaa
// 123 => 123

// function toLowerCase(str) {

//     let newStr = []

//     for (s of str) {
//         if (s.charCodeAt(0) >= 65 && s.charCodeAt(0) <= 90 ) {
//             s = String.fromCharCode(s.charCodeAt(0) + 32)
//             newStr.push(s)
//         } else {
//             newStr.push(s)
//         }
//     }
//     return newStr.join('')
// }


// console.log(toLowerCase("Test"))
// console.log(toLowerCase("aaaa"))
// console.log(toLowerCase("123"))

//function that takes in 2 strings
//jewels stones
// trying to find number of jewels in stones.
// jewels = 'aAb'
//stones = 'aAAbbBB'

// function findJewels(jewels, stones) {
//     let count = 0
//     for (let s of stones) {
//         if (jewels.includes(s)) {
//             count ++
//         }
//     }
//     return count
// }

function findJewels(jewels, stones) {
    let jewelsObj = {}
    for (let j of jewels) {
        jewelsObj[j] = true
    }
    
    let count = 0
    for (let s of stones) {
        if (jewelsObj[s]){
            count ++
        }
    } 
    return count
}

console.log(findJewels('aAb', 'aAAbbBB'))

//give me an array of integers
//do a binary search - divide by half