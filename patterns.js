// let n = 5
// let string = ''
// for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < i; j++) {
//         string += '*'
//     }
//     string += '\n'

// }
// console.log(string)


// for number pattern
{
    let n = 5
    let string = ''
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j--) {
            string += j
        }
        string += '\n'
    
    }
    console.log(string)
}


