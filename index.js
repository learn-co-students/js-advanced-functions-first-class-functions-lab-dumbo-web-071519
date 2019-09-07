// Code your solution in this file!
const returnFirstTwoDrivers = (array) =>{
    console.log([`${array[0]}, ${array[1]}`])
    return [`${array[0]}`, `${array[1]}`]
}
const returnLastTwoDrivers = (array) =>{
    const lastNum = array.length-1
    const last = array[lastNum]
    const secondTo = array[lastNum-1]
    console.log(`${last},<- last, secondTo -> ${secondTo}, ${array}`)
 return [`${secondTo}`, `${last}`]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
    return (fare) => {
        return fare * num
    }
}

// const fareDoubler = (fare) => {
//     return fare * 2
// }

// const fareTripler = (fare) => {
//     return fare * 3
// }

const fareDoubler = createFareMultiplier(2) 
const fareTripler = createFareMultiplier(3) 

function selectDifferentDrivers(drivers, thing){
    console.log(thing)
    if(thing == returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers)
    }
    else{
        return returnLastTwoDrivers(drivers)
    }
}