import Drug from "../core/Drug";
import Game from "../core/Game";
import { getAll, drugFromId, getDrugId } from "../core/Drug";
import { useState } from "react";
import CityName from "../core/CityName";
import { cityFromId, allCities } from "../core/CityName";

interface ActionLoanSharkProps {
  game: Game;
  setShowLoanShark: any;
  showMessage: (msg: string) => void;
}

export default function ActionLoanShark({ game, setShowLoanShark, showMessage}: ActionLoanSharkProps) {
  const [amount, setAmount] = useState(1);
  const currentOwe: number = game._player.debt;

  const onClickDeposit = () => {
    if(game._player.checkPay(amount)){
      game.payLoanBack(amount);
      showMessage(`You payed ${amount}$ back`);
    } else {
      showMessage(`Cant pay ${amount}$ back`)
    }
    setShowLoanShark(false);
  };

  const onClickWithdraw = () => {
    game.loan(amount);
    showMessage(`You got ${amount}$`);
    setShowLoanShark(false);
  };

  return (
    <>
      <div className="row gy-2 form-group">
      {currentOwe > 0 && <label className="text-center">You owe {currentOwe}$</label>}
      <input
          type="number"
          className="form-control"
          id="formGroupExampleInput"
          min={1}
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
        />
        <div className="col-6">
        <button className="btn btn-primary" onClick={onClickWithdraw}>
            Loan
          </button>
        </div>
        <div className="col-6">
        <button className="btn btn-primary" onClick={onClickDeposit}>
            Pay Back
          </button>
        </div>
        
      </div>
    </>
  );
}
