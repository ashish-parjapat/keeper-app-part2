import React from "react";
import notes from "../notes"




function Note(props) {
  return (
    <div className="note">
     <p>{props.title}</p>
     <p>{props.content}</p>
      
    </div>
  );
}

export default Note;
