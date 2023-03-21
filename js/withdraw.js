document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  withdrawField.value = "";

  if (isNaN(newWithdrawAmount)) {
    alert("Withdraw amount must be a number");
    return;
  }

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  const balanceTotalElement = document.getElementById("balance-total");
  const previoisBalanceTotalString = balanceTotalElement.innerText;
  const previoisBalanceTotal = parseFloat(previoisBalanceTotalString);

  if (newWithdrawAmount > previoisBalanceTotal) {
    alert("Withdraw amount must be greater than 0");
    return;
  }
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  //calculate current total balance
  const currentBalanceTotal = previoisBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = currentBalanceTotal;
});
