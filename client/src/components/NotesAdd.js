import React from 'react'

const NotesAdd = () => {
  return (
    <form action="submit">
    {/* <label htmlFor="title">Title:</label> */}
    <input placeholder="Title" className="titleInput" type="text" name="title" id="" />
    <textarea className="contentInput" placeholder="Content of the notes" name="content" id="" cols="30" rows="10"></textarea>


    </form>
  )
}

export default NotesAdd