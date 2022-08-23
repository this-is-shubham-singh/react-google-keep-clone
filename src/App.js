import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
  // ADDITEM is an array
  // it has all title and content values as an object
  const [additem, setadditem] = useState([]);

  // called when button is clicked
  // receving note object as parameter from createnote.js
  // note has title and content values in object
  // saving note values in ADDITEM array
  // prevdata has saved values (title, content) of ADDITEM array
  // note has new values (title, content) coming from CREATENOTE
  const addnote = (note) => {
    setadditem((prevdata) => {
      // return (" ");
      return [...prevdata, note];
    });
  };

  const ondelete = (id) => {
    setadditem((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx != id;
      })
    );
  };

  return (
    <>
      <Header />
      <CreateNote passnote={addnote} />

      {additem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteitem={ondelete}
          />
        );
      })}

      <Footer />
    </>
  );
};

export default App;
