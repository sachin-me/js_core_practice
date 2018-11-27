function BankAccount(acNum, totalBal, amount) {
  let obj = {};
  obj.accountNumber = acNum;
  obj.totalBalance = totalBal;
  obj.amount = amount;
  obj.deposit = function() {
    console.log(`You are depositing ${this.totalBalance + this.amount} rs. in your a/c no. ${this.accountNumber}`);
  }
  obj.withDraw = function() {
    if (this.totalBalance > this.amount) {
      console.log(`You can withdraw Balance`)
    } else {
      console.log(`You are out of balance!!`)
    }
  }
  obj.getBalance = function(){
    console.log(`Your current balance is ${this.totalBalance - this.amount} rs.`);
  }
  return obj;
}

function checkingAccount(acNum, totalBal, amount, fee) {
  let checkAcc = BankAccount(acNum, totalBal, amount);
  checkAcc.fee = fee;
  checkAcc.deductFee = function() {
    console.log(`Your deducted balance is ${this.totalBalance - this.fee} rs.`);
  }
  return checkAcc;
}

function SavingAccount(acNum, totalBal, amount, intRate) {
  let saveAcc = BankAccount(acNum, totalBal, amount);
  saveAcc.intRate = intRate;
  saveAcc.addInterest = function() {
    console.log(`Your Saved balance is ${this.totalBalance - (this.totalBalance * this.intRate / 100 )} rs!!`)
  }
  return saveAcc;
}

let b1 =  BankAccount(1234567890, 2000000, 3000000000);
b1.deposit();
b1.withDraw();
b1.getBalance();
console.log(b1);

let checkAcc1 = checkingAccount(1234567890, 1234567, 2345, 250);
checkAcc1.deductFee();
console.log(checkAcc1);

let savingAcc = SavingAccount(1234567890, 50000, 234567, 15);
console.log(savingAcc.totalBalance)
savingAcc.addInterest();
console.log(savingAcc);