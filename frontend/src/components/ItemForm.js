import React, { useState } from "react";

const ItemForm = ({ addItem }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return alert("Please enter all fields");
    addItem({ name, price });
    setName("");
    setPrice("");
  };

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Item price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
