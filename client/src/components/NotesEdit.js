import React, {useEffect} from 'react'
import moment from 'moment';
import MDEditor from '@uiw/react-md-editor';




const NotesEdit = ({handleEditedNotesObj, selectedNotesItem, contentValueEdit, setContentValueEdit}) => {

  useEffect(()=>{
    handleEditedNotesObj({...selectedNotesItem, content: contentValueEdit});
  }, [contentValueEdit])

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
    <input autoFocus={true} onChange={handleChange} required defaultValue={selectedNotesItem.title} className="titleInput" type="text" name="title" id="" />
    <MDEditor
        onChange={setContentValueEdit}
        required className="contentInput"  name="content" id="" 
        value={contentValueEdit}
      height={350}
      />
    </form>
  )
}

export default NotesEdit