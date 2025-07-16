// Tips Calculator Task
// You have to build a tips calculator.
// The calculator should calculate tips in following manner:
// If the bill value is less than 20, tips should be 20%. In other cases tips should be 15%.

// Create an arrow function calculateTips(), that takes a bill parameter and returns the corresponding tips.
// Create an array of bills with test data below.
// Create an array of tips for each bill.
// Create an array of total bills, that is bill + tips.

// Test data: 11, 20, 47.

const calculateTips = (bill) => bill < 20 ? bill * 0.2 : bill * 0.15;


const bill = [11, 20, 47];
const tips = [];
tips.push(calculateTips(bill[0]));
tips.push(calculateTips(bill[1]));
tips.push(calculateTips(bill[2]));
const bills = [];
bills.push(tips[0] + bill[0]);
bills.push(tips[1] + bill[1]);
bills.push(tips[2] + bill[2]);

console.log(bill);
console.log(tips);
console.log(bills);