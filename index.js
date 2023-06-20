function returnFirstTwoDrivers(drivers) {
return drivers.slice(0,2) 
}
function returnLastTwoDrivers(drivers){
    return drivers.slice(-2)
}
let selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(integer) { 
    return function (fareMultiplier) {
    return fareMultiplier* integer
}
}
function fareDoubler(fares) {
    return fareDoubler= createFareMultiplier(2)(fares)

}
function fareTripler(fares){
    return fareTripler=createFareMultiplier(3)(fares)
}
function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers)
}
