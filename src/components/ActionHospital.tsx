import Drug from "../core/Drug";
import Game from "../core/Game";
import { getAll, drugFromId, getDrugId } from "../core/Drug";
import { useState } from "react";
import CityName from "../core/CityName";
import { cityFromId, allCities } from "../core/CityName";

interface ActionHospitalProps {
  game: Game;
  setShowHospital: any;
  showMessage: (msg: string) => void;
}

export default function ActionHospital({ game, setShowHospital, showMessage}: ActionHospitalProps) {
  const [city, setCity] = useState(CityName.CHICAGO);

  const onClick = () => {
    const cost: number = game.checkHospitalPrice();
    if(cost > 0 && game._player.checkPay(cost)){
      game.payHospital(cost);
      showMessage(`You paid ${cost}$ to get fixed`);
    } else {
      showMessage(`You are not fixable`);
    }
    setShowHospital(false);
  };

  return (
    <>
      <div className="row gy-2 form-group">
        <button type="submit" className="btn btn-primary" onClick={onClick}>
          {`Pay ${game.checkHospitalPrice()} to get fixed`}
        </button>
      </div>
    </>
  );
}
