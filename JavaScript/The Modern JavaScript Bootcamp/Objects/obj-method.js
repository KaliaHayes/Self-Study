// A method is an oject property whose value is a function [checkAvail]
// When you put a function in an object, you can access that objects properties

let rest = {
    name: 'Wingstop',
    capacity: 75,
    guestCount: 0,
    // create a func that takes in a number and determines if you can seat that amount of people
    checkAvail: function(partySize) {
        let seatsLeft = this.capacity - this.guestCount
        if (seatsLeft > partySize) {
            return `Your party of ${partySize} will be seated shortly!`
        }
        else {
            return `We do not currently have capacity for your party of ${partySize}! There are only ${seatsLeft} seats left.`
        }

    }
}

// use the checkAvail method you created to see if you can seat various parties of people
//let myParty = console.log(rest.checkAvail(4))
// let theirFleet = console.log(rest.checkAvail(6))

// add new methods: seatParty - takes party size to be seated and add it to guestCount; removeParty - take party size leaving resturant and remove it from guestCount
rest.seatParty = function (partySize) {
    this.guestCount = this.guestCount + partySize
}

rest.removeParty = function(partySize) {
    this.guestCount = this.guestCount - partySize
}

rest.seatParty(72)
console.log(rest.checkAvail(4))
rest.removeParty(5)
console.log(rest.checkAvail(4))
console.log(rest)