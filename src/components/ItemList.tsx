import React from "react"
import ItemCard from "./ItemCard"
import { Item } from "../redux/slices/ItemTypes"

interface ItemListProps {
  data: Item[] | []
  onClick: (id: number) => void
}

const ItemList: React.FC<ItemListProps> = ({ data, onClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.length ? (
        data.map((item: Item) => (
          <ItemCard
            key={item.id}
            item={item}
            onClick={() => onClick(item.id)}
          />
        ))
      ) : (
        <ItemCard
          item={{ id: 0, title: "No items found", body: "", description: "" }}
          onClick={() => {}}
        />
      )}
    </div>
  )
}

export default ItemList
