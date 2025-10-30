import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import "./index.css";

const App = () => {
  const [items, setItems] = useState([]);

  // Fetch all items
  const fetchItems = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/items");
      setItems(res.data);
    } catch (err) {
      console.error("Error fetching items:", err);
      alert("Backend not connected or network error.");
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Add new item
  const addItem = async (newItem) => {
    try {
      await axios.post("http://localhost:5000/api/items", newItem);
      fetchItems();
    } catch (err) {
      console.error(err);
    }
  };

  // Update item
  const updateItem = async (id, updatedItem) => {
    try {
      await axios.put(`http://localhost:5000/api/items/${id}`, updatedItem);
      fetchItems();
    } catch (err) {
      console.error(err);
    }
  };

  // Delete item
  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/items/${id}`);
      fetchItems();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <ItemForm addItem={addItem} />
        <ItemList items={items} onUpdate={updateItem} onDelete={deleteItem} />
      </div>
    </div>
  );
};

export default App;
