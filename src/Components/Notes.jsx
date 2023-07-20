import React from 'react'
import "./NoteStyle.css";
// import file from "./Components/NoteFile";


export default function Notes(props) {
  return (
    <div>
      <div className="container note">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    </div>
  )
}
