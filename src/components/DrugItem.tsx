import Drug from "../core/Drug";

interface DrugItemProps {
  item: Drug;
  price: number;
}

function DrugItem({ item, price }: DrugItemProps) {
  return (
    <li key={item} className="list-group-item">
      <pre className="text-left">
        {item.padEnd(20)}{(""+price).padStart(5)}
      </pre>
    </li>
  );
}

export default DrugItem;
