import { useState } from "react";
import { PackingListProps } from "../types";
import ItemAdd from "./ItemAdd";
import { Item } from "../types";

const PackingList: React.FC<PackingListProps> = ({
  items,
  onDeleteItems,
  onToggleItems,
  onClearList,
}) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems: Item[] = [];

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  // const handleClearList: MouseEventHandler<HTMLButtonElement> = (event) => {
  //   // Your implementation for clearing the list goes here
  // };
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <ItemAdd
            item={item}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
