import React from "react";
import { useSelector } from "react-redux";

function ListNotes() {
  const notes = useSelector((state) => state.notesReducer.notes);
  return (
    <div>
      {notes.map((note) => {
        return (
          <div>
            <p>{note.id}</p>
            <h2>{note.title}</h2>
            <p>{note.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ListNotes;
