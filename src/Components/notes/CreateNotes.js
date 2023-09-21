import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../../redux/slices/noteSlice";
import { nanoid } from "@reduxjs/toolkit";

function CreateNotes() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      createNote({
        title, //key value pair (if take same name of key and value then don't have to write like this title: title)
        desc,
        id: nanoid(10), //nanoid gives reandom id of length 10 , we get nanoid from reduux tool kit
      })
    );
  }

  return (
    <div>
      <form onClick={handleSubmit}>
        <input
          placeholder="title here"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="description here"
          type="text"
          onChange={(e) => setDesc(e.target.value)}
        />
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default CreateNotes;
