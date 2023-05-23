import Drug from "./Drug"
import CityName from "./CityName"

export default class City{
    private _name: CityName;
    private _drugs: Map<Drug, number>;
    private _flightPrices: Map<CityName, number>;

    constructor(name: CityName, drugs: Map<Drug, number>, flightPrices: Map<CityName, number>){
        this._name = name;
        this._drugs = drugs;
        this._flightPrices = flightPrices;
    }

    get name(){
        return this._name;
    }

    get drugs(){
        return this._drugs;
    }

    get flightPrices(){
        return this._flightPrices;
    }

    
    getDrugPrice(value:Drug): number {
        return this._drugs.get(value) || -1;
    }
}