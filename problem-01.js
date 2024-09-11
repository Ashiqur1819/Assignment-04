function calculateTax(income, expenses) {
    if ((income && expenses < 0) || expenses > income) {
        return "Invalid Input";
    }
    const remainingIncome = income - expenses;
    const tax = remainingIncome * 0.2;
    return tax;
}

const tax = calculateTax(10000, 3000);
const tax2 = calculateTax(34000, 1753);
const tax3 = calculateTax(5000, 1500);
const tax4 = calculateTax(7000, 7000);
const tax5 = calculateTax(-5000, 2000);
const tax6 = calculateTax(6000, -1500);

// console.log(tax);
// console.log(tax2);
// console.log(tax3);
// console.log(tax4);
// console.log(tax5);
// console.log(tax6);


