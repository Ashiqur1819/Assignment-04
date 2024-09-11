function calculateTax(income, expenses) {
  if ((income && expenses < 0) || expenses > income) {
    return "Invalid Input";
  }
  
  const remainingIncome = income - expenses;
  return remainingIncome * 0.2;
}


function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }

  email = email.split("@");
  const userName = email[0];
  const domainName = email[1];
  return userName + " sent you an email from " + domainName;
}


function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }

  name = name.split("");
  for (const letter of name) {
    if (!isNaN(letter)) {
      return true;
    }
  }
  return false;
}


function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }

  let totalScore = obj.testScore + obj.schoolGrade;
  if (obj.isFFamily) {
    totalScore = obj.testScore + obj.schoolGrade + 20;
  }

  if (totalScore >= 80) {
    return true;
  } else {
    return false;
  }
}


function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }

  let sumOfWaitingTimes = 0;
  for (const time of waitingTimes) {
    sumOfWaitingTimes += time;
  }

  const averageWaitingTime = Math.round(sumOfWaitingTimes / waitingTimes.length);
  const remainingExaminer = (serialNumber - 1) - waitingTimes.length;
  return remainingExaminer * averageWaitingTime;
}
