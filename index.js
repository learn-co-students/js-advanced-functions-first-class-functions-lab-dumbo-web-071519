
// Code your solution in this file!

const returnFirstTwoDrivers = function(driverList) {
  return [driverList[0], driverList[1]]
}

const returnLastTwoDrivers = function(driverList) {
  return [driverList[driverList.length-2], driverList[driverList.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multiplier) => {
  return function(fare) {return fare*multiplier}
}

const fareDoubler = (fare) => {
  const double = () => {return createFareMultiplier(2)}
  return double()(fare)
}

const fareTripler = (fare) => {
  const triple = () => {return createFareMultiplier(3)}
  return triple()(fare)
}

function selectDifferentDrivers(driverList, findDrivers) {
  return findDrivers(driverList)
}
