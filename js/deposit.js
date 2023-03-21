//add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  //get the deposit amount from the deposit input field
  //for input fields use .value to get value from the input field
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  depositField.value = "";

  if (isNaN(newDepositAmount)) {
    alert("Deposit amount must be a number");
    return;
  }

  //get the deposit total amount
  const depositTotalElement = document.getElementById("deposit-total");
  const previoisDepositTotalString = depositTotalElement.innerText;
  const previoisDepositTotal = parseFloat(previoisDepositTotalString);

  //add numbers to set the total deposit
  const currentDepositTotal = newDepositAmount + previoisDepositTotal;
  depositTotalElement.innerText = currentDepositTotal;

  //get current balance total
  const balanceTotalElement = document.getElementById("balance-total");
  const previoisBalanceTotalString = balanceTotalElement.innerText;
  const previoisBalanceTotal = parseFloat(previoisBalanceTotalString);

  //calculate current total balance
  const currentBalanceTotal = previoisBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;
  ////clear the deposit fields
});
