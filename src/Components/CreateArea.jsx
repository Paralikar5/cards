import React, { useState } from "react";

export default function CreateArea() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form action="">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note ... "
          cols="30"
          rows="10"
        ></textarea>
        <button onClick={submitNote}>Add Note</button>
      </form>
    </div>
  );
}
