let rest = {
    name: 'Hayes',
    guestCapacity: 75,
    guestCount: 0, //seats being used,
    
    // create a func that takes in a number and see if you can seat 5 folk
    checkAvail: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function(partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

// seat a part of 72
rest.seatParty(72)

// check if a party of 4 can be sat (false, there are only 3 seats left)
console.log(rest.checkAvail(4))

// remove a party of 5 from the guestcount
rest.removeParty(5)

// check if a party of 4 can be sat NOW (true, there are now 67 seats left)
console.log(rest.checkAvail(4))