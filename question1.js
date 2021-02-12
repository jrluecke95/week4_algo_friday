randomStrings = ['elephant', 'cat', 'penguin', 'bird', 'dog', 'rat', 'lion', 'parrot']


function arrayParser(array) {
    let returnArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length >= 4) {
            returnArray.push(array[i])
        }
    }
    return returnArray;
}

function arrayParser2(array) {
    let returnArray = [];
    let i = 0;
    while (i < array.length) {
        if (array[i].length >= 4) {
            returnArray.push(array[i])
            i++
        } else {
            i++
        }
    }
    return returnArray
}

console.log(arrayParser(randomStrings))
console.log(arrayParser2(randomStrings))


// function arrayParser3(array) {
//     array.forEach
// }