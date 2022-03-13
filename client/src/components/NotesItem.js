import React from 'react'

const NotesItem = ({notesItem, handleSelectNotesItemClick}) => {
  return (
      <div onClick={() => handleSelectNotesItemClick(notesItem)} className="notesItemTitle">
    <p>{notesItem.title}</p>
    </div>
  )
}

export default NotesItem