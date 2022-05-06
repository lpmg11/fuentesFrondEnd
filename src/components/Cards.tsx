import React from "react";
import Fuente from "./Fuentes";

function Cards(props: any) {


  const noteElements = props.elements.map((note: any) => <Fuente name={note.name} description={note.description} repository={note.repository} key={note._id} _id={note._id}/>);

  return (
    <div className="content">
      {noteElements}
    </div>
  );
}

export default Cards
