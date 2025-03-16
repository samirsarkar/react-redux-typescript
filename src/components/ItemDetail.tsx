import React, { JSX } from "react"

import { Item } from "../redux/slices/ItemTypes"

interface ItemDetailsProps {
  data: Item
}

const ItemDetails: React.FC<ItemDetailsProps> = ({ data }): JSX.Element => {
  return (
    <div className="p-6 border rounded shadow">
      <h2 className="text-2xl font-bold">{data?.title}</h2>
      <p>{data?.body}</p>
    </div>
  )
}

export default ItemDetails
