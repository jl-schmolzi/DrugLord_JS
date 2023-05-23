import Drug from "../core/Drug";
import Game from "../core/Game";
import { getAll, drugFromId, getDrugId } from "../core/Drug";
import { useState } from "react";
import CityName from "../core/CityName";
import { cityFromId, allCities } from "../core/CityName";

interface ActionJetProps {
  game: Game;
  setShowJet: any;
  showMessage: (msg: string) => void;
}

export default function ActionJet({ game, setShowJet, showMessage}: ActionJetProps) {
  const [city, setCity] = useState(CityName.CHICAGO);

  const onClick = () => {
    if(game.checkTravelTo(city)){
      game.travelTo(city);
      showMessage(`Welcome to ${city}`);
    } else {
      showMessage(`Cant jet to ${city}`)
    }
    setShowJet(false);
  };
  const cityArr: CityName[] = allCities();
  const currentPrices: Map<CityName, number> = game.getCurrentCityFromList().flightPrices;

  return (
    <>
      <div className="row gy-2 form-group">
        <select
          className="form-control"
          value={city}
          onChange={(e) => {setCity(cityFromId(e.target.selectedIndex));
          }}
        >
          {cityArr.map((city) => (
            <option key={city}>{`${city}: $${currentPrices.get(city)}`}</option>
          ))}
        </select>
        <button type="submit" className="btn btn-primary" onClick={onClick}>
          Jet
        </button>
      </div>
    </>
  );
}
