const bill = 100;
const tipPercent = 18;

function calculateTip(bill, tipPercent) {
  // Calculate tip and total
  const tip = (bill*tipPercent/100);
  const totalBill = (bill+tip);
  // Print formatted results
  console.log("Bill:","$"+bill.toFixed(2));
  console.log("Tip: ","$"+tip.toFixed(2));
  console.log("Total:","$"+totalBill.toFixed(2));
}



calculateTip(bill, tipPercent);