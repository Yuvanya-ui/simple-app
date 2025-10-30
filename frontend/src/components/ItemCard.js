import React, { useState } from "react";

const ItemCard = ({ item, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(item.name);
  const [updatedPrice, setUpdatedPrice] = useState(item.price);

  const handleUpdate = () => {
    onUpdate(item._id, { name: updatedName, price: updatedPrice });
    setIsEditing(false);
  };

  return (
    <div className="item-card">
      {isEditing ? (
        <>
          <input
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <input
            type="number"
            value={updatedPrice}
            onChange={(e) => setUpdatedPrice(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(item._id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default ItemCard;
