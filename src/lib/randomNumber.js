// max - is to that number, but not including it
export function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export function listOfRandomNumbers(start, end, fromNum, toNum) {
    let listOfNums = [];
    for (let iter = start; iter < end; iter++) {
        listOfNums.push(generateRandomNumber(fromNum, toNum));
    }
    return listOfNums;
}