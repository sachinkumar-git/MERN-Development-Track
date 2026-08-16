let str = ["hi", "hello", "bye", "!"];

function concat(strings) {
    let result = ""; // Initialize with an empty string

    for(let i = 0; i < strings.length; i++) {
        result += strings[i];
    }

    return result;
}

console.log(concat(str));