import React from 'react'
import moment from 'moment';



const NotesEdit = ({handleEditedNotesObj, selectedNotesItem}) => {

    const handleChange = (e) => {
        const value = e.target.value;
        handleEditedNotesObj({
            ...selectedNotesItem,
        [e.target.name]: value,
        updateDate: moment().format('MMM Do YYYY, h:mm')
        });
  
      }


  return (
    <form action="submit">
    <input onChange={handleChange} required value={selectedNotesItem.title} className="titleInput" type="text" name="title" id="" />
    <textarea onChange={handleChange} required className="contentInput" value={selectedNotesItem.content} name="content" id="" cols="30" rows="10"></textarea>

    </form>
  )
}

export default NotesEdit