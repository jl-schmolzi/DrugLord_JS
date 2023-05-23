import { useState } from "react";
import { GameName } from "./components/GameName";
import DrugOverview from "./components/DrugOverview";
import Game from "./core/Game";
import Drug from "./core/Drug";
import GameState from "./components/GameState";
import ActionButton from "./components/ActionButton";
import React from "react";
import ActionBuy from "./components/ActionBuy";
import ActionSell from "./components/ActionSell";
import ActionJet from "./components/ActionJet";
import ActionBank from "./components/ActionBank";
import ActionHospital from "./components/ActionHospital";
import ActionLoanShark from "./components/ActionLoanShark";

const game: Game = new Game();

function App() {
  const [showBuy, setShowBuy] = useState(false);
  const clickBuy = () => {setShowBuy(!showBuy); setMsg("")};

  const [showSell, setShowSell] = useState(false);
  const clickSell = () => {setShowSell(!showSell); setMsg("")};

  const [showJet, setShowJet] = useState(false);
  const clickJet = () => {setShowJet(!showJet); setMsg("")};

  const [showLoanShark, setShowLoanShark] = useState(false);
  const clickLoanShark = () => {setShowLoanShark(!showLoanShark); setMsg("")};

  const [showBank, setShowBank] = useState(false);
  const clickBank = () => {setShowBank(!showBank); setMsg("")};

  const [showHospital, setShowHospital] = useState(false);
  const clickHospital = () => {setShowHospital(!showHospital); setMsg("")};
  
  const [msg, setMsg] = useState("");
  const showMessage =  (msg: string) :void => setMsg(msg);


  return (
    <div className="container">
      <div className="row">
        <GameName name="DRUG LORD" />
      </div>
      <div className="row gx-0">
        <div className="col">
          <DrugOverview heading={"Drugs on hand"} drugs={game._player.drugs}/>
        </div>
        <div className="col">
          <DrugOverview heading={"Street Prices"} drugs={game.getCurrentCityFromList().drugs} />
        </div>
        <div className="col gx-4">
          <GameState game={game}/>
        </div>
      </div>
      <div className="row">
        <div className="col-2 gy-2">
          <ActionButton name="Buy Drugs" onClick={clickBuy} current={showBuy}/>
        </div>
        <div className="col-2 gy-2">
          <ActionButton name="Sell Drugs" onClick={clickSell} current={showSell}/>
        </div>
        <div className="col-2 gy-2">
          <ActionButton name="Jet to a City" onClick={clickJet} current={showJet}/>
        </div>
        <div className="col-2 gy-2">
          <ActionButton name="Go to Bank" onClick={clickBank} current={showBank}/>
        </div>
        <div className="col-2 gy-2">
          <ActionButton name="Visit Loan Shark" onClick={clickLoanShark} current={showLoanShark}/>
        </div>
        <div className="col-2 gy-2">
          <ActionButton name="Go to the Hospital" onClick={clickHospital} current={showHospital}/>
        </div>
      </div>
      {msg && <div className="row">
        <div className="col g-4">
          <div className="text-center">{msg}</div>
        </div>
      </div>}
      {showBuy && <div className="row">
        <div className="col g-4">
          <ActionBuy game={game} setShowBuy={setShowBuy} showMessage={setMsg}/>
        </div>
      </div>}
      {showSell && <div className="row">
        <div className="col g-4">
          <ActionSell game={game} setShowSell={setShowSell} showMessage={setMsg}/>
        </div>
      </div>}
      {showJet && <div className="row">
        <div className="col g-4">
          <ActionJet game={game} setShowJet={setShowJet} showMessage={setMsg}/>
        </div>
      </div>}
      {showBank && <div className="row">
        <div className="col g-4">
          <ActionBank game={game} setShowBank={setShowBank} showMessage={setMsg}/>
        </div>
      </div>}
      {showLoanShark && <div className="row">
        <div className="col g-4">
          <ActionLoanShark game={game} setShowLoanShark={setShowLoanShark} showMessage={setMsg}/>
        </div>
      </div>}
      {showHospital && <div className="row">
        <div className="col g-4">
          <ActionHospital game={game} setShowHospital={setShowHospital} showMessage={setMsg}/>
        </div>
      </div>}
    </div>
  );
}

export default App;
