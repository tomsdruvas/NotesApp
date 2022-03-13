import React from 'react'
import moment from 'moment';

const NotesContent = ({selectedNotesItem}) => {
  return (
      <>
    {selectedNotesItem.title ?? "Welcome!"}
    <br />
    Posted: {selectedNotesItem.postDate ?? moment().format('MMM Do YYYY, h:mm')}
    Updated: {selectedNotesItem.updateDate ?? moment().format('MMM Do YYYY, h:mm')}

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