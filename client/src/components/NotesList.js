import React from 'react'
import NotesItem from './NotesItem'

const NotesList = ({notesItems, handleSelectNotesItemClick}) => {

    const notesItemsNode = notesItems.map(notesItem => {
        return <NotesItem notesItem={notesItem} key={notesItem.id} handleSelectNotesItemClick={handleSelectNotesItemClick} />
    })

  return (
    <div className="divForList">
  {notesItemsNode}
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  
 
  
  </div>
  )
}

export default NotesList