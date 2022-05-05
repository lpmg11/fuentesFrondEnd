import React from "react";
import Fuente from "./Fuentes";

function Cards(props: any) {

  const noteElements = props.elements.map((note: any) => {
    return <Fuente name={note.name} description={note.description} repository={note.repository} _id={note._id}/>;
  });

  return (
    <div className="content">
      {noteElements}
    </div>
  );
}

export default Cards