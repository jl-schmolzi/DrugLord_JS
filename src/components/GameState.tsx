import Game from "../core/Game";
import GameStateEntry from "./GameStateEntry";

interface GameStateProps {
  game: Game;
}

function GameState({ game }: GameStateProps) {
  return (
    <>
      <br></br>
      <br></br>
      <GameStateEntry
        name={"Date"}
        value={
          game._date.getDate() +
          "." +
          (game._date.getMonth() + 1) +
          "." +
          game._date.getFullYear()
        }
      />
      <br></br>
      <GameStateEntry name={"Location"} value={game.getCurrentCity()} />
      <GameStateEntry name={"Hold"} value={game._player.hold + " (" + game._player.currentHold + ")"} />
      <br></br>
      <br></br>
      <GameStateEntry name={"Cash"} value={"$" + game._player.cash} />
      <GameStateEntry name={"In Bank"} value={"$" + game._player.bank} />
      <GameStateEntry name={"In dept"} value={"$" + game._player.debt} />
      <br></br>
      <br></br>
      <GameStateEntry name={"Status Pts"} value={"" + game._player.status} />
      <GameStateEntry name={"Health"} value={"" + game._player.health} />
    </>
  );
}

export default GameState;
