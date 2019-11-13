// global scope (convert, myTemp, converted)
    // local scope (c & temp) // args to a function are bound to that local scope
        // local scope isFreezing

let convert = function(temp) {
    let c = (temp - 32) * (5/9)
    if (c <= 0) {
        let isFreezing = true
    }
    return c
}

let myTemp = 69
let converted = convert(myTemp)
console.log(myTemp ,'in celcius is', converted)