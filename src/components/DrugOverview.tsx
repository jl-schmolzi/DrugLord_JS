import Drug from "../core/Drug";
import DrugItem from "./DrugItem";

interface DrugOverviewProps {
  heading: string;
  drugs: Map<Drug, number>;
}

function DrugOverview({ heading, drugs }: DrugOverviewProps) {
  const rowKeys: Drug[] = Array.from(drugs.keys());
  let i: number = 0;

  return (
    <>
      <h2 className="text-center">{heading}</h2>
      <ul className="list-group">
        {rowKeys.map((rowKey) => {
            return (
                <DrugItem
                    item={rowKey}
                    price={drugs.get(rowKey) || 0}
                    key={rowKey} 
                />
            )
        })}
      </ul>
    </>
  );
}

export default DrugOverview;
