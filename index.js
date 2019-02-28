// Code your solution in this file
function findMatching(drivers, word){
    return drivers.filter(driver => driver.toLowerCase() == word.toLowerCase());
}

function fuzzyMatch(drivers, partialWrold){
    return drivers.filter(function (driver){return driver.slice(0, partialWrold.length) == partialWrold});
}

function matchName(drivers, word){
    return drivers.filter(function (driver){return driver["name"].match(word)});
}