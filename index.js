const returnFirstTwoDrivers= (arr) => { return arr.slice(0,2) }

const returnLastTwoDrivers = (arr) => { return arr.slice(-2) }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (mult) => {
    return (fare) => { return fare * mult }
}   

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (arr, fn) => { return fn(arr) }