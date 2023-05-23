import Drug from "../core/Drug";
import Game from "../core/Game";
import { getAll, drugFromId, getDrugId } from "../core/Drug";
import { useState } from "react";

interface ActionSellProps {
  game: Game;
  setShowSell: any;
  showMessage: (msg: string) => void;
}

export default function ActionSell({ game, setShowSell, showMessage}: ActionSellProps) {
  const [drug, setDrug] = useState(Drug.LUDES);
  const [amount, setAmount] = useState(1);

  const onClick = () => {
    if (game.checkSellDrug(drug, amount)) {
      game.sellDrug(drug, amount);
      showMessage(`You sold ${amount} ${drug}`);
    } else {
      showMessage(`Cant sell ${amount} ${drug}`);
    }
    setShowSell(false);
  };
  const drugArr: Drug[] = getAll();

  return (
    <>
      <div className="row gy-2 form-group">
        <select
          className="form-control"
          value={drug}
          onChange={(e) => {setDrug(drugFromId(e.target.selectedIndex));
          }}
        >
          {drugArr.map((drug) => (
            <option key={getDrugId(drug)}>{drug}</option>
          ))}
        </select>
        <input
          type="number"
          className="form-control"
          id="formGroupExampleInput"
          min={1}
          max={game._player.hold}
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
        />
        <button type="submit" className="btn btn-primary" onClick={onClick}>
          Sell
        </button>
      </div>
    </>
  );
}
