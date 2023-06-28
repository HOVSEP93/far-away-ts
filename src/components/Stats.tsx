import { NumberOfItems } from "../types";

const Stats: React.FC<NumberOfItems> = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  if (!items.length)
    return (
      <footer className="stats">
        <em>Start Adding Some Item To Your Packing List 😒</em>
      </footer>
    );

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>🌍✈️ Here We Go ✈️🌍</em>
      ) : (
        <em>
          You have {numItems} number of items in your list,and packed{" "}
          {numPacked} and you already picked {percentage} %
        </em>
      )}
    </footer>
  );
};

export default Stats;
