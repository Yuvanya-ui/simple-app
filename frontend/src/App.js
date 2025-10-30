import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/notes");
      setNotes(res.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const addNote = async () => {
    if (!newNote.title || !newNote.content) return;
    try {
      await axios.post("http://localhost:5000/api/notes", newNote);
      setNewNote({ title: "", content: "" });
      fetchNotes();
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  return (
    <div style={{ margin: "40px auto", width: "50%", textAlign: "center" }}>
      <h1>📝 Simple Notes App</h1>

      <input
        type="text"
        placeholder="Title"
        value={newNote.title}
        onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        style={{ padding: "10px", width: "80%", margin: "10px" }}
      />
      <br />
      <textarea
        placeholder="Content"
        value={newNote.content}
        onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
        style={{ padding: "10px", width: "80%", height: "100px", margin: "10px" }}
      ></textarea>
      <br />
      <button onClick={addNote} style={{ padding: "10px 20px" }}>
        Add Note
      </button>

      <h2 style={{ marginTop: "30px" }}>📚 Notes List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {notes.map((note) => (
          <li
            key={note._id}
            style={{
              border: "1px solid gray",
              borderRadius: "10px",
              padding: "15px",
              margin: "10px auto",
              width: "80%",
              textAlign: "left",
            }}
          >
            <strong>{note.title}</strong>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
