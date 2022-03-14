import React from 'react'
import moment from 'moment';



const NotesAdd = ({handleNewNotesObj, selectedNotesItem}) => {

    const handleChange = (e) => {
        const value = e.target.value;
        handleNewNotesObj({
            ...selectedNotesItem,
        [e.target.name]: value,
        id: null,
        postDate: moment().format('MMM Do YYYY, h:mm'),
        updateDate: moment().format('MMM Do YYYY, h:mm')
        });
  
      }


  return (
    <form  action="submit">
    <input onChange={handleChange} required placeholder="Title" className="titleInput" type="text" name="title" id="" />
    <textarea onChange={handleChange} required className="contentInput" placeholder="Content of the notes" name="content" id="" cols="30" rows="10"></textarea>

    </form>
  )
}

export default NotesAdd