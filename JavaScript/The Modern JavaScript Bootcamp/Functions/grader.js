// create a grade calculator functiont hat takes two args; score and total possible score
// if i have a test worth 20 points and i get 15; score = 15, total = 20; you got a 75%(C)
// You got a C (75%)!
// a: 90- 100, b: 80-89, c: 70-79, d: 60-69, f: 59 and below

let grader = function(score, total) {
    let percent = score / total
    let perc = percent.toFixed(2) * 100 // percentage of score

    // grade loops
    let letter
    if (perc >= 90) {
        letter = 'A' 
    }
    else if (perc >= 80) {
        letter = 'B'
    }
    else if (perc >= 70) {
        letter = 'C'
    }
    else if (perc >= 60) {
        letter = 'D'
    }
    else {
        letter = 'F'
    }

    return `You got a ${letter} (${perc}%)!`
}

let test = grader(44, 69)
console.log(test)