class BankAccount {
  constructor(acNum, totalBal, amount) {
    this.accountNumber = acNum;
    this.totalBalance = totalBal;
    this.amount = amount;
  }
  deposit() {
    console.log(`You are depositing ${this.totalBalance + this.amount} rs. in your a/c no. ${this.accountNumber}`);
  }
  withDraw() {
    if (this.totalBalance > this.amount) {
      console.log(`You can withdraw Balance`)
    } else {
      console.log(`You are out of balance!!`)
    }
  }
  getBalance() {
    console.log(`Your current balance is ${this.totalBalance - this.amount} rs.`);
  }
}

class CheckingAccount extends BankAccount {
  constructor(acNum, totalBal, amount, fee) {
    super(acNum, totalBal, amount);
    this.fee = fee;
  }
  deductFee() {
    console.log(`Your deducted balance is ${this.totalBalance - this.fee} rs.`);
  }
}

class SavingAccount extends BankAccount{
  constructor(acNum, totalBal, amount, intRate) {
    super(acNum, totalBal, amount);
    this.intRate = intRate;
  }
  addInterest() {
    console.log(`Your Saved balance is ${this.totalBalance - (this.totalBalance * this.intRate / 100 )} rs!!`);
  }
}

let money = new BankAccount(1234567890, 1234567, 12345);
money.deposit();
money.withDraw();
money.getBalance();
console.log(money);

let checkAcc1 = new CheckingAccount(12345678, 12345, 234, 234567);
checkAcc1.deductFee();
console.log(checkAcc1);

let SavingAccount1 = new SavingAccount(123456, 50000, 11000, 15);
SavingAccount1.addInterest();
console.log(SavingAccount1);