import React from 'react'

const NotesContent = ({selectedNotesItem}) => {
  return (
      <>
    {selectedNotesItem.title ?? "Welcome!"}
    <br />
    Post date: {selectedNotesItem.postDate ?? Date.now()}
    Update date: {selectedNotesItem.updateDate ?? Date.now()}

    <div className="divForContent">
    {selectedNotesItem.content ?? "Welcome to my new notes taking app"}


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
    </>
  )
}

export default NotesContent