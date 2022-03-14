import React, {useState, useEffect} from 'react'
import Request from '../helpers/request';
import '../styles/Style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import {faUpload} from '@fortawesome/free-solid-svg-icons'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import NotesList from '../components/NotesList';
import NotesContent from '../components/NotesContent';
import NotesAdd from '../components/NotesAdd';
import NotesEdit from '../components/NotesEdit';








const MainContainer = () => {

  const [notesItems, setNotesItems] = useState([]);
  const [selectedNotesItem, setSelectedNotesItem] = useState({});
  const [appMode, setAppMode] = useState("selected");
  // const [activeNote, setActiveNote] = useState({});

  const requestAll = function(){
    const request = new Request();
    const notesItemsPromise = request.get('/api/notes')

    Promise.resolve(notesItemsPromise)
    .then((data) => {
      setNotesItems(data);
    })
  }

  useEffect(()=>{
    requestAll();
  }, [])

  const showContentIcons = () => {
    if(appMode === "add"){
      return (
        <>
        <FontAwesomeIcon icon={faXmark} size="4x" className="addXmark"/>
        <FontAwesomeIcon icon={faUpload} size="4x" className="uploadIcon"/>
        <FontAwesomeIcon onClick={handleSubmitNotesItem} icon={faCheck} size="4x" className="checkIcon"/>
        </>
      )
    }
    else if (appMode === "edit"){
      return(
        <>
        <FontAwesomeIcon icon={faXmark} size="4x" className="addXmark"/>
        <FontAwesomeIcon icon={faUpload} size="4x" className="uploadIcon"/>
        <FontAwesomeIcon onClick={handleNotesDelete} icon={faTrashCan} size="4x" className="deleteIcon"/>
        <FontAwesomeIcon onClick={handleSubmitNotesItem} icon={faCheck} size="4x" className="checkIcon"/>
        </>
        )

    }
    else if (appMode === "selected"){
      return(
        <>
        <FontAwesomeIcon onClick={() => setAppMode("edit")} icon={faPenToSquare} size="4x" className="editIcon"/>
        <FontAwesomeIcon onClick={handleNotesDelete} icon={faTrashCan} size="4x" className="deleteIcon"/>
        </>
      )

    }
  }

  const handleNotesPost = async function(notesItemObj){
    const request = new Request();
    request.post("/api/notes", notesItemObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      setSelectedNotesItem(data);
    })
    .then(() => requestAll());
  }

  const handleNotesDelete = function(){
    const request = new Request();
    const url = "/api/notes/" + selectedNotesItem.id
    request.delete(url)
    .then(() => requestAll())
  }

  const handleNotesUpdate = function(){
    const request = new Request();
    request.patch('/api/notes/' + selectedNotesItem.id, selectedNotesItem)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      setSelectedNotesItem(data);
    })
    .then(() => requestAll());
  }




  const handleSubmitNotesItem = () => {
    if (!selectedNotesItem.id){
      if(!selectedNotesItem.title || !selectedNotesItem.content){
         return alert("You have not filled everything in")
      }
      handleNotesPost(selectedNotesItem)
      setAppMode("selected")
    }
    else {
      if(!selectedNotesItem.title || !selectedNotesItem.content){
        return alert("You have not filled everything in")
     }
      handleNotesUpdate(selectedNotesItem)
      setAppMode("selected")

    }
  }

  const toggleComponent = () => {
    if (appMode === "add"){
      return(
        <>
          <NotesAdd selectedNotesItem={selectedNotesItem} handleNewNotesObj={(newNotesObj) => setSelectedNotesItem(newNotesObj)} />
        </>
      )
    }
    else if (appMode === "selected"){
      return(
        <>
    <NotesContent selectedNotesItem={selectedNotesItem} />
        </>
      )
    }
    else if (appMode === "edit"){
      return(
        <>
          <NotesEdit selectedNotesItem={selectedNotesItem} handleEditedNotesObj={(editedNotesObj) => setSelectedNotesItem(editedNotesObj)} />
        </>
      )

    }
  }

  const handleSelectNotesItemClick = (notesItemObject) => {
    setAppMode("selected")
    setSelectedNotesItem(notesItemObject)
  }
  return (<>
    
    <div className="parent">
    <div className="div1">
  <input className="searchInput" type="text" name="search" placeholder="Search.." />
    <NotesList notesItems={notesItems} handleSelectNotesItemClick={(value) => handleSelectNotesItemClick(value)} />
  

    <FontAwesomeIcon onClick={() => setAppMode("add")} icon={faPlusCircle} size="4x" className="addIcon"/>
    
    
     </div>
    <div className="div2">
    {toggleComponent()}

    {/* <FontAwesomeIcon icon={faXmark} size="4x" className="addXmark"/>
    <FontAwesomeIcon icon={faTrashCan} size="4x" className="deleteIcon"/>
    <FontAwesomeIcon icon={faUpload} size="4x" className="uploadIcon"/>
    <FontAwesomeIcon icon={faCheck} size="4x" className="checkIcon"/>
    <FontAwesomeIcon icon={faPenToSquare} size="4x" className="editIcon"/> */}
    {showContentIcons()}


    


    

    


    
    </div>
    </div>
    </>
  )
}

export default MainContainer