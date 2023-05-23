import City from "./City";
import CityName from "./CityName";
import Drug from "./Drug";
import { drugFromId, getDrugId } from "./Drug";
import Player from "./Player";

export default class Game {
  private static START_HEALTH: number = 100;
  private static START_CASH: number = 500;
  private static START_STATUS: number = 1;
  private static START_HOLD: number = 10;
  private static START_BANK: number = 0;
  private static START_LOAN_DEPT: number = 0;
  private static LOAN_SHARK_INTEREST: number = 0.05;
  private static LOAN_SHARK_DMG: number = 25;
  private static LOAN_SHARK_DMG_BASE_MODIFIER: number = 1;
  private static WINNING_VALUE: number = 5_000_000;
  private static HOSPITAL_DURATION: number = 14;
  private static BASE_ACTION_DURATION: number = 1;
  private static LOAN_DAYS: number = 14;
  private currentCity: CityName;
  private loanDate: Date | null;
  private loanSharkModifier: number;
  private cities: City[];
  private player: Player;
  private date: Date;

  constructor() {
    this.loanDate = null;
    this.cities = [];
    this.initCities();
    this.currentCity = this.initStartingCity();
    this.player = this.initPlayerInformation();
    this.date = new Date();
    console.log(this.date);
    this.loanSharkModifier = Game.LOAN_SHARK_DMG_BASE_MODIFIER;
  }

  initPlayerInformation(): Player {
    let playerDrugs: Map<Drug, number> = new Map<Drug, number>();
    playerDrugs.set(Drug.COCAINE, 0);
    playerDrugs.set(Drug.CRACK, 0);
    playerDrugs.set(Drug.HEROIN, 0);
    playerDrugs.set(Drug.ACID, 0);
    playerDrugs.set(Drug.CRYSTAL, 0);
    playerDrugs.set(Drug.GRASS, 0);
    playerDrugs.set(Drug.SPEED, 0);
    playerDrugs.set(Drug.LUDES, 0);
    return new Player(
      Game.START_CASH,
      Game.START_BANK,
      Game.START_LOAN_DEPT,
      Game.START_STATUS,
      75,
      Game.START_HOLD,
      playerDrugs
    );
  }

  initStartingCity(): CityName {
    const index: number = Math.floor(Math.random() * this.cities.length);
    return this.cities[index].name;
  }

  initCities(): void {
    this.initChicago();
    this.initDetroit();
    this.initLasVegas();
    this.initLosAngeles();
    this.initMiami();
    this.initNewYork();
    this.initSanDiego();
    this.initWashingtonDC();
  }

  initSanDiego(): void {
    const drugPrices: Map<Drug, number> = this.initRandomDrugs();

    const flightPrices: Map<CityName, number> = new Map<CityName, number>();
    flightPrices.set(CityName.CHICAGO, 214);
    flightPrices.set(CityName.DETROIT, 241);
    flightPrices.set(CityName.LAS_VEGAS, 109);
    flightPrices.set(CityName.LOS_ANGELES, 25);
    flightPrices.set(CityName.MIAMI, 330);
    flightPrices.set(CityName.NEW_YORK, 330);
    flightPrices.set(CityName.SAN_DIEGO, 0);
    flightPrices.set(CityName.WASHINGTON_D_C, 330);

    let city: City = new City(CityName.SAN_DIEGO, drugPrices, flightPrices);
    this.cities[0] = city;
  }

  initNewYork(): void {
    const drugPrices: Map<Drug, number> = this.initRandomDrugs();

    const flightPrices: Map<CityName, number> = new Map<CityName, number>();
    flightPrices.set(CityName.CHICAGO, 145);
    flightPrices.set(CityName.DETROIT, 159);
    flightPrices.set(CityName.LAS_VEGAS, 265);
    flightPrices.set(CityName.LOS_ANGELES, 330);
    flightPrices.set(CityName.MIAMI, 145);
    flightPrices.set(CityName.NEW_YORK, 0);
    flightPrices.set(CityName.SAN_DIEGO, 330);
    flightPrices.set(CityName.WASHINGTON_D_C, 25);

    let city: City = new City(CityName.NEW_YORK, drugPrices, flightPrices);
    this.cities[1] = city;
  }

  initMiami(): void {
    const drugPrices: Map<Drug, number> = this.initRandomDrugs();

    const flightPrices: Map<CityName, number> = new Map<CityName, number>();
    flightPrices.set(CityName.CHICAGO, 194);
    flightPrices.set(CityName.DETROIT, 241);
    flightPrices.set(CityName.LAS_VEGAS, 293);
    flightPrices.set(CityName.LOS_ANGELES, 330);
    flightPrices.set(CityName.MIAMI, 0);
    flightPrices.set(CityName.NEW_YORK, 145);
    flightPrices.set(CityName.SAN_DIEGO, 330);
    flightPrices.set(CityName.WASHINGTON_D_C, 145);

    let city: City = new City(CityName.MIAMI, drugPrices, flightPrices);
    this.cities[2] = city;
  }

  initLosAngeles(): void {
    const drugPrices: Map<Drug, number> = this.initRandomDrugs();

    const flightPrices: Map<CityName, number> = new Map<CityName, number>();
    flightPrices.set(CityName.CHICAGO, 214);
    flightPrices.set(CityName.DETROIT, 241);
    flightPrices.set(CityName.LAS_VEGAS, 109);
    flightPrices.set(CityName.LOS_ANGELES, 0);
    flightPrices.set(CityName.MIAMI, 330);
    flightPrices.set(CityName.NEW_YORK, 330);
    flightPrices.set(CityName.SAN_DIEGO, 25);
    flightPrices.set(CityName.WASHINGTON_D_C, 330);

    let city: City = new City(CityName.LOS_ANGELES, drugPrices, flightPrices);
    this.cities[3] = city;
  }

  initLasVegas(): void {
    const drugPrices: Map<Drug, number> = this.initRandomDrugs();

    const flightPrices: Map<CityName, number> = new Map<CityName, number>();
    flightPrices.set(CityName.CHICAGO, 145);
    flightPrices.set(CityName.DETROIT, 159);
    flightPrices.set(CityName.LAS_VEGAS, 0);
    flightPrices.set(CityName.LOS_ANGELES, 109);
    flightPrices.set(CityName.MIAMI, 293);
    flightPrices.set(CityName.NEW_YORK, 265);
    flightPrices.set(CityName.SAN_DIEGO, 109);
    flightPrices.set(CityName.WASHINGTON_D_C, 265);

    let city: City = new City(CityName.LAS_VEGAS, drugPrices, flightPrices);
    this.cities[4] = city;
  }

  initDetroit(): void {
    const drugPrices: Map<Drug, number> = this.initRandomDrugs();

    const flightPrices: Map<CityName, number> = new Map<CityName, number>();
    flightPrices.set(CityName.CHICAGO, 85);
    flightPrices.set(CityName.DETROIT, 0);
    flightPrices.set(CityName.LAS_VEGAS, 159);
    flightPrices.set(CityName.LOS_ANGELES, 241);
    flightPrices.set(CityName.MIAMI, 241);
    flightPrices.set(CityName.NEW_YORK, 159);
    flightPrices.set(CityName.SAN_DIEGO, 241);
    flightPrices.set(CityName.WASHINGTON_D_C, 159);

    let city: City = new City(CityName.DETROIT, drugPrices, flightPrices);
    this.cities[5] = city;
  }

  initWashingtonDC(): void {
    const drugPrices: Map<Drug, number> = this.initRandomDrugs();

    const flightPrices: Map<CityName, number> = new Map<CityName, number>();
    flightPrices.set(CityName.CHICAGO, 145);
    flightPrices.set(CityName.DETROIT, 159);
    flightPrices.set(CityName.LAS_VEGAS, 265);
    flightPrices.set(CityName.LOS_ANGELES, 330);
    flightPrices.set(CityName.MIAMI, 145);
    flightPrices.set(CityName.NEW_YORK, 25);
    flightPrices.set(CityName.SAN_DIEGO, 330);
    flightPrices.set(CityName.WASHINGTON_D_C, 0);

    let city: City = new City(
      CityName.WASHINGTON_D_C,
      drugPrices,
      flightPrices
    );
    this.cities[6] = city;
  }

  initChicago(): void {
    const drugPrices: Map<Drug, number> = this.initRandomDrugs();

    const flightPrices: Map<CityName, number> = new Map<CityName, number>();
    flightPrices.set(CityName.CHICAGO, 0);
    flightPrices.set(CityName.DETROIT, 85);
    flightPrices.set(CityName.LAS_VEGAS, 145);
    flightPrices.set(CityName.LOS_ANGELES, 214);
    flightPrices.set(CityName.MIAMI, 194);
    flightPrices.set(CityName.NEW_YORK, 145);
    flightPrices.set(CityName.SAN_DIEGO, 214);
    flightPrices.set(CityName.WASHINGTON_D_C, 145);

    let city: City = new City(CityName.CHICAGO, drugPrices, flightPrices);
    this.cities[7] = city;
  }

  initRandomDrugs(): Map<Drug, number> {
    const ret: Map<Drug, number> = new Map<Drug, number>();
    ret.set(Drug.COCAINE, Math.floor(Math.random() * 20_000) + 40_000);
    ret.set(Drug.CRACK, Math.floor(Math.random() * 15_000) + 20_000);
    ret.set(Drug.HEROIN, Math.floor(Math.random() * 2_000) + 8_000);
    ret.set(Drug.ACID, Math.floor(Math.random() * 2_000) + 1_000);
    ret.set(Drug.CRYSTAL, Math.floor(Math.random() * 200) + 500);
    ret.set(Drug.GRASS, Math.floor(Math.random() * 200) + 200);
    ret.set(Drug.SPEED, Math.floor(Math.random() * 100) + 50);
    ret.set(Drug.LUDES, Math.floor(Math.random() * 40) + 10);
    return ret;
  }

  getPlayerDrug(drug: Drug): number {
    return this.player.getDrugCount(drug);
  }

  getPlayerDrugs(): Map<Drug, number> {
    return this.player.drugs;
  }

  getCurrentCityFromList(): City {
    for (let city of this.cities) {
      if (city.name === this.currentCity) {
        return city;
      }
    }
    return this.cities[0];
  }

  checkTravelTo(city: CityName): boolean {
    const price: number = this.getCurrentCityFromList().flightPrices.get(city) || 0;
    return this._player.checkPay(price);
  }

  travelTo(city: CityName): void {
    const price: number = this.getCurrentCityFromList().flightPrices.get(city) || 0;
    this._player.pay(price);
    this.currentCity = city;
    this.advance();
  }

  getDrugPrice(value: Drug): number {
    return this.getCurrentCityFromList().getDrugPrice(value);
  }

  getCurrentCity(): CityName {
    return this.currentCity;
  }

  get _player(){
    return this.player;
  }

  get _date(){
    return this.date;
  }

  /*     CheckTravelTo(int index):boolean {
        cityName: CityName = CityName.cityNameFromId(index);
        int price = getCurrentCityFromList().flightPrices().get(cityName);
        return player.checkPay(price);
    }

    public void travelTo(int cityId) {
        CityName cityName = CityName.cityNameFromId(cityId);
        int price = getCurrentCityFromList().flightPrices().get(cityName);
        player.pay(price);
        currentCity = cityName;
        advance();
    }*/

  checkBuyDrug(drug: Drug, amount: number): boolean {
    let price: number =
      this.getCurrentCityFromList().getDrugPrice(drug) * amount;
    return this.player.checkHold(amount) && this.player.checkPay(price);
  }

  buyDrug(drug: Drug, amount: number): void {
    let price: number =
      this.getCurrentCityFromList().getDrugPrice(drug) * amount;
    this.player.pay(price);
    this.player.addDrug(drug, amount);
    this.player.addHold(amount);
    this.advance();
  }

  checkSellDrug(drug: Drug, amount: number): boolean {
    return this.player.checkSellDrug(drug, amount);
  }

  sellDrug(drug: Drug, amount: number): void {
    const price: number = this.getCurrentCityFromList().getDrugPrice(drug);
    this.player.sellDrug(drug, price, amount);
    this.advance();
  }

  advance(days: number = 1): number {
    for (let i: number = 0; i < days; i++) {
      let newDate: Date = new Date(this.date);
      newDate.setDate(this.date.getDate() + Game.BASE_ACTION_DURATION);

      this.date = newDate;
      this.player.increaseLoan(Game.LOAN_SHARK_INTEREST);  
      
      if (this.loanDate && (this.loanDate.getTime() === newDate.getTime())) {
        
        this.player.damage(Game.LOAN_SHARK_DMG * this.loanSharkModifier);
        this.loanSharkModifier++;
        const newLoanDate = new Date(this.loanDate);
        newLoanDate.setDate(this.loanDate.getDate() + Game.LOAN_DAYS);
        this.loanDate = newLoanDate;
        return Game.LOAN_SHARK_DMG * this.loanSharkModifier;
      }
    }
    return 0;
  }

  checkWithdraw(amount: number): boolean {
    return this.player.checkWithdraw(amount);
  }

  withdraw(amount: number): void {
    this.player.withdraw(amount);
    this.advance();
  }

  pcheckDeposit(amount: number): boolean {
    return this.player.checkDeposit(amount);
  }

  deposit(amount: number): void {
    this.player.deposit(amount);
    this.advance();
  }

  checkHospitalPrice(): number {
    const health: number = this.player.checkHospital();
    if (health == 100) {
      return 0;
    } else if (health > 75) {
      return 250;
    } else if (health > 50) {
      return 500;
    } else if (health > 25) {
      return 750;
    } else {
      return 1000;
    }
  }

  checkHospital(hostpitalPay: number): boolean {
    return this.player.checkPay(hostpitalPay);
  }

  payHospital(hostpitalPay: number): void {
    this.player.pay(hostpitalPay);
    this.player.health = 100;
    this.advance(Game.HOSPITAL_DURATION);
  }

  loan(money: number): void {
    this.player.loan(money);
    const newLoanDate = new Date(this.loanDate || this.date);    
    newLoanDate.setDate((this.loanDate?.getDate() || this.date.getDate()) + Game.LOAN_DAYS);
    this.loanDate = newLoanDate;
    this.advance();
  }

  payLoanBack(money: number): void {
    this.player.payLoanBack(money);
    if (this.player.debt == 0) {
      //this.loanDate = null;
      this.loanSharkModifier = 1;
      this.loanDate = null;
    }
    this.advance();
  }

  checkWin(): boolean {
    return this.player.bank > Game.WINNING_VALUE;
  }

  checkLose(): boolean {
    return this.player.health <= 0;
  }
}
