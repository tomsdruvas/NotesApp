import React from 'react'
import NotesItem from './NotesItem'

const NotesList = ({notesItems}) => {

    const notesItemsNode = notesItems.map(notesItem => {
        return <NotesItem notesItem={notesItem} key={notesItem.id} />
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
  
 
  
  </div>
  )
}

export default NotesList