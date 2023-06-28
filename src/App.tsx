import "./App.css";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import { useState } from "react";
import Stats from "./components/Stats";

import { Item } from "./types";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  /**
   * The above code defines three functions to handle adding, deleting, and toggling items in a list.
   * @param {Item} item - `item` is an object of type `Item` that is being added to an array of items
   * using the `handleAddItems` function.
   */
  function handleAddItems(item: Item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItems(id: number) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id: number) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // function onClearList(event: React.MouseEvent<HTMLButtonElement>) {
  //   const confirmed = window.confirm("Are You Sure Want Delete All Items?");

  //   if (confirmed) setItems([]);
  // }

  function onClearList() {
    const confirmed = window.confirm("Are You Sure Want Delete All Items?");

    if (confirmed) setItems([]);
  }
  return (
    <>
      <div className="app">
        <h1>🌴 Far Away 🚢</h1>
        <Form onAddItems={handleAddItems} />
        <PackingList
          items={items}
          onDeleteItems={handleDeleteItems}
          onToggleItems={handleToggleItems}
          onClearList={onClearList}
        />
        <Stats items={items} />
      </div>
    </>
  );
}

export default App;
