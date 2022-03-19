import React, { useEffect } from 'react'
import moment from 'moment';
import MDEditor from '@uiw/react-md-editor';



const NotesAdd = ({handleNewNotesObj, newNotesObject, contentValue, setContentValue}) => {

  useEffect(()=>{
    handleNewNotesObj({...newNotesObject, content: contentValue});
  }, [contentValue])


    const handleChange = (e) => {
        const value = e.target.value;
        handleNewNotesObj({
        ...newNotesObject,
        [e.target.name]: value,
        id: null,
        content: contentValue,
        postDate: moment().format('MMM Do YYYY, h:mm'),
        updateDate: moment().format('MMM Do YYYY, h:mm')
        });
  
      }


  return (
    <form action="submit">
    <input autoFocus={true} onChange={handleChange} required placeholder="Title" className="titleInput" type="text" name="title" id="" />
    {/* <textarea onChange={handleChange} required className="contentInput" placeholder="Content of the notes" name="content" id="" cols="30" rows="10"></textarea> */}
    <MDEditor
        onChange={setContentValue}
        required className="contentInput"  name="content" id="" 
        value={contentValue}
        textareaProps={{
        placeholder: "Enter your notes here"
      }}
      height={350}
      />
    </form>
  )
}

export default NotesAdd