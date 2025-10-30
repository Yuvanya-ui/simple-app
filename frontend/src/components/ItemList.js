import React from "react";
import ItemCard from "./ItemCard";

const ItemList = ({ items, onUpdate, onDelete }) => {
  return (
    <div className="item-list">
      {items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        items.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

export default ItemList;
