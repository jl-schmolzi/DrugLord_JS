import Drug from "../core/Drug";
import Game from "../core/Game";
import { getAll, drugFromId, getDrugId } from "../core/Drug";
import { useState } from "react";
import CityName from "../core/CityName";
import { cityFromId, allCities } from "../core/CityName";

interface ActionBankProps {
  game: Game;
  setShowBank: any;
  showMessage: (msg: string) => void;
}

export default function ActionBank({ game, setShowBank, showMessage}: ActionBankProps) {
  const [amount, setAmount] = useState(1);

  const onClickDeposit = () => {
    if(game._player.checkPay(amount)){
      game.deposit(amount);
      showMessage(`Added ${amount}$ to the bank`);
    } else {
      showMessage(`Cant add ${amount}$ to the bank`)
    }
    setShowBank(false);
  };

  const onClickWithdraw = () => {
    if(game.checkWithdraw(amount)){
      game.withdraw(amount);
      showMessage(`Took ${amount}$ from the bank`);
    } else {
      showMessage(`Cant take ${amount}$ from the bank`)
    }
    setShowBank(false);
  };

  return (
    <>
      <div className="row gy-2 form-group">
      <input
          type="number"
          className="form-control"
          id="formGroupExampleInput"
          min={1}
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
        />
        <div className="col-6">
        <button className="btn btn-primary" onClick={onClickDeposit}>
            Deposit
          </button>
        </div>
        <div className="col-6">
        <button className="btn btn-primary" onClick={onClickWithdraw}>
            Withdraw
          </button>
        </div>
        
      </div>
    </>
  );
}
