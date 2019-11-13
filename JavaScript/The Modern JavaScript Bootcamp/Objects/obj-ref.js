let acct = {
    username: 'KH',
    expenses: 0,
    income: 0
}

// create a function that allows you to add an expense
let addExpense = function (user, amt) {
    user.expenses = user.expenses + amt
}

// create a func addIncome that adds income to a cerain account
let addIncome = function(user, inc) {
    user.income = user.income + inc
}

// reset account - reset the expenses and income to zero
let resetAcct = function(user) {
    user.expenses = 0
    user.income = 0
}

// get account summary - print a summary of the acct
// acct for KH has $900 balance, $1000 in income, $100 in expenses
let acctSummary = function (user) {
    let bal = user.income - user.expenses
    return `The account for ${user.username} has a balance of $${bal}. The user has an income of $${user.income} and expenses of $${user.expenses}.`
}

// ask if user wants to reset their account

addExpense(acct, 500) // we are referencing the acct created on line 1
addIncome(acct, 100000)
addExpense(acct, 1000) // add another expense which will get tacked on to the current expenses
let mySummary = acctSummary(acct)
console.log(mySummary)

resetAcct(acct)
console.log(`You have reset your account. Your new account summary is: ${acctSummary(acct)}`)
