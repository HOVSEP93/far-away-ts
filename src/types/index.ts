export interface Item {
  id: number;
  packed: boolean;
  quantity: number;
  description: string;
}
export interface FormProps {
  onAddItems: (item: Item) => void;
}

export interface PackingListProps {
  items: Item[];
  onDeleteItems: (id: number) => void;
  onToggleItems: (id: number) => void;
  onClearList: () => void;
}

export interface NumberOfItems {
  items: Item[];
}

export type ItemAddProps = {
  item: Item;
  onDeleteItems: (id: number) => void;
  onToggleItems: (id: number) => void;
};
