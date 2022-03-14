import React from 'react'
import NotesItem from './NotesItem'

const NotesList = ({notesItems, handleSelectNotesItemClick, searchResults, searchTerm}) => {

    const notesItemsNode = notesItems.map(notesItem => {
        return <NotesItem notesItem={notesItem} key={notesItem.id} handleSelectNotesItemClick={handleSelectNotesItemClick} />
    })

    const notesItemsNodeSearched = searchResults.map(notesItem => {
        return <NotesItem notesItem={notesItem} key={notesItem.id} handleSelectNotesItemClick={handleSelectNotesItemClick} />
    })


  return (
    <div className="divForList">
  {notesItemsNodeSearched.length === 0 && searchTerm.length === 0 ? notesItemsNode : notesItemsNodeSearched}
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