import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const CreateNote = (props) => {
  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  const inputevent = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setnote((prevdata) => {
      return {
        ...prevdata,
        [name]: value,
      };
    });
  };

  // called when button is clicked
  // addnote function of app.js is called here
  // note values (title, content) are passed to addnote
  const addevent = () => {
    props.passnote(note);
    setnote({
      title: "",
      content: "",
    });
  };

  return (
    <>
      <div className="main_note">
        <form>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={inputevent}
            placeholder="Title"
            autoComplete="off"
          ></input>
          <textarea
            name="content"
            value={note.content}
            onChange={inputevent}
            rows=""
            column=""
            placeholder="Write a note..."
          ></textarea>
          <Button onClick={addevent}>
            <AddIcon className="plus_sign" />
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
