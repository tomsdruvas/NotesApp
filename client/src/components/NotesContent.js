import React from 'react'
import moment from 'moment';
import MDEditor from '@uiw/react-md-editor';

const NotesContent = ({selectedNotesItem}) => {
  return (
      <>
    <p className="contentTitle">{selectedNotesItem.title ?? "Welcome!"}</p>
   <p className="contentDates"> 
   Posted: {selectedNotesItem.postDate ?? moment().format('MMM Do YYYY, h:mm')}
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Updated: {selectedNotesItem.updateDate ?? moment().format('MMM Do YYYY, h:mm')}</p>

    <div className="divForContent">
    <MDEditor.Markdown source={selectedNotesItem.content ?? "Welcome to my new notes taking app"} />
  


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