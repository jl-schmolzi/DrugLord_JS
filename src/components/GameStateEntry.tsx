interface GameStateEntryProps {
  name: string;
  value: string;
  color?: "primary" | "warning" | "danger" | "success";
}

function GameStateEntry({
  name,
  value,
  color = "success",
}: GameStateEntryProps) {
    return (
        <pre className={"text-" + color}>
            {name.padStart(10)}: <span className="text-warning">{value}</span>
        </pre>
    )
}

export default GameStateEntry;
