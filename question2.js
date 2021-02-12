function combineReverseString(string1, string2) {
    
    const string1Array= string1.split('').reverse();
    const string2Array= string2.split('').reverse();
    const revString1 = string1Array.join('');
    const revString2 = string2Array.join('');

    const bigString = `${revString2} ${revString1}`
    return bigString
}

console.log(combineReverseString('hello', 'you'))


// combine reverse string first 
// split string on index[length.secondstring]

function combRevString(string1, string2) {
    // const bigString = string1 + string2;
    const revArray = (string1 + string2).split('').reverse();
    revArray.splice((string2.length), 0, ' ')
    const revString = revArray.join('');
    return revString

}

console.log(combRevString('hello', 'you'))