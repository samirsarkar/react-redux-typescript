import React from "react"
import { memo } from "react"

interface ItemCardProps {
  item: { id: number; title: string; body: string; description: string }
  onClick: () => void
}

const ItemCard: React.FC<ItemCardProps> = memo(({ item, onClick }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition-all"
      onClick={onClick}
    >
      <h3 className="text-lg font-semibold">{item.title}</h3>
      <p className="text-sm text-gray-600">{item.body.slice(0, 50)}...</p>
    </div>
  )
})

export default ItemCard
