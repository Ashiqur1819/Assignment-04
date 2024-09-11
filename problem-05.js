function waitingTime(waitingTimes, serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return "Invalid Input";
    }

    let sumOfWaitingTimes = 0;
    for(const time of waitingTimes){
        sumOfWaitingTimes += time;    
    }

    const averageWaitingTime = Math.round(sumOfWaitingTimes / waitingTimes.length);
    const remainingExaminer = (serialNumber - 1) - waitingTimes.length;
    const totalWaitingTime = remainingExaminer * averageWaitingTime;
    return totalWaitingTime;
}

const result = waitingTime([3, 5, 7, 11, 6], 10);
const result2 = waitingTime([13, 2], 6);
const result3 = waitingTime([13, 2, 6, 7, 10], 6);
const result4 = waitingTime([6], 4);
const result5 = waitingTime(7, 10);
const result6 = waitingTime("[6,2]", 9);
const result7 = waitingTime([7, 8, 3, 4, 5], "9");

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);