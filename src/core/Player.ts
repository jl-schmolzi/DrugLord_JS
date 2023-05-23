import Drug from "./Drug";

export default class Player {
  private _cash: number;
  private _bank: number;
  private _debt: number;
  private _status: number;
  private _health: number;
  private _hold: number;
  private _currentHold: number;
  private _drugs: Map<Drug, number>;

  constructor(
    cash: number,
    bank: number,
    debt: number,
    status: number,
    health: number,
    hold: number,
    drugs: Map<Drug, number>
  ) {
    this._cash = cash;
    this._bank = bank;
    this._debt = debt;
    this._status = status;
    this._health = health;
    this._hold = hold;
    this._currentHold = 0;
    this._drugs = drugs;
  }

  get cash(): number {
    return this._cash;
  }

  get bank(): number {
    return this._bank;
  }
  get debt(): number {
    return this._debt;
  }
  get status(): number {
    return this._status;
  }
  get health(): number {
    return this._health;
  }
  get hold(): number {
    return this._hold;
  }
  get currentHold(): number {
    return this._currentHold;
  }
  get drugs(): Map<Drug, number> {
    return this._drugs;
  }

  set health(newHealth: number) {
    this._health = newHealth;
  }

  getDrugCount(drug: Drug): number {
    return this.drugs.get(drug) || -1;
  }

  pay(price: number): void {
    this._cash -= price;
  }

  checkPay(price: number): boolean {
    return price <= this._cash;
  }

  checkHold(amount: number): boolean {
    return this._currentHold + amount <= this._hold;
  }

  addDrug(drug: Drug, amount: number): void {
    this._drugs.set(drug, (this._drugs.get(drug) || 0) + amount);
  }

  addHold(amount: number): void {
    this._currentHold += amount;
  }

  sellDrug(drug: Drug, price: number, amount: number): void {
    const current: number = this._drugs.get(drug) || -1;
    if (current !== -1) {
      this._currentHold -= amount;
      this._cash += price * amount;
      this._drugs.set(drug, current - amount);
    }
  }

  checkSellDrug(drug: Drug, amount: number): boolean {
    return amount <= this.getDrugCount(drug);
  }

  checkWithdraw(amount: number): boolean {
    return amount <= this._bank;
  }

  withdraw(amount: number): void {
    this._bank -= amount;
    this._cash += amount;
  }

  checkDeposit(amount: number): boolean {
    return amount <= this._cash;
  }

  deposit(amount: number): void {
    this._cash -= amount;
    this._bank += amount;
  }

  checkHospital(): number {
    return this._health;
  }

  loan(money: number): void {
    this._cash += money;
    this._debt += money;
  }

  payLoanBack(money: number): void {
    this.pay(money);
    this._debt = money > this._debt ? 0 : this._debt - money;
  }

  increaseLoan(loanSharkInterest: number): void {
    this._debt = this._debt + Math.floor(this._debt * loanSharkInterest);
  }

  damage(damage: number): void {
    this._health -= damage;
  }
}
