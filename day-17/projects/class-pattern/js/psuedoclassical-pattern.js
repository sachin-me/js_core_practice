// function BankAccount(acNum, totalBal, amount) {
//   this.accountNumber = acNum;
//   this.totalBalance = totalBal;
//   this.amount = amount;
// }

// BankAccount.prototype.deposit = function() {
//   console.log(`You are depositing ${this.totalBalance + this.amount} rs. in your a/c no. ${this.accountNumber}`);
// }

// BankAccount.prototype.withDraw = function() {
//   if (this.totalBalance > this.amount) {
//     console.log(`You can withdraw Balance`)
//   } else {
//     console.log(`You are out of balance!!`)
//   }
// }

// BankAccount.prototype.getBalance = function() {
//   console.log(`Your current balance is ${this.totalBalance - this.amount} rs.`);
// }

// let money = new BankAccount(1234567890, 1234567, 12345);
// money.deposit();
// money.withDraw();
// money.getBalance();
// console.log(money);

// function CheckingAccount(acNum, totalBal, amount, fee) {
//   BankAccount.call(this, acNum, totalBal, amount);
//   this.fee = fee;  
// }

// CheckingAccount.prototype.__proto__ = Object.create(BankAccount.prototype);

// CheckingAccount.prototype.deductFee = function() {
//   console.log(`Your deducted balance is ${this.totalBalance - this.fee} rs.`);
// }

// let checkAcc1 = new CheckingAccount(12345678, 12345, 234, 234567);
// checkAcc1.deductFee();
// console.log(checkAcc1);

// function SavingAccount(acNum, totalBal, amount, intRate) {
//   BankAccount.call(this, acNum, totalBal, amount);
//   this.intRate = intRate;
// }

// SavingAccount.prototype.__proto__ = Object.create(BankAccount.prototype);

// SavingAccount.prototype.addInterest = function() {
//   console.log(`Your Saved balance is ${this.totalBalance - (this.totalBalance * this.intRate / 100 )} rs!!`);
// }

// let SavingAccount1 = new SavingAccount(123456, 50000, 11000, 15);
// SavingAccount1.addInterest();
// console.log(SavingAccount1);