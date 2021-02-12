function find4thChar(string) {
    if (string.length >= 4) {
        return string[3]
    } else {
        return 'too short of a string'
    }
}

console.log(find4thChar('helo'))
console.log(find4thChar('hey'))
console.log(find4thChar('hi'))