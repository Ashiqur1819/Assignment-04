function calculateFinalScore(obj) {
  if(typeof obj !== 'object' ) {
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


const result = calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  });
const result2 = calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false });
const result3 = calculateFinalScore("hello");
const result4 = calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  });

console.log(result)
console.log(result2)
console.log(result3)
console.log(result4)
