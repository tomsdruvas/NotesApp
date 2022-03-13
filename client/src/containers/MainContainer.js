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







const MainContainer = () => {

  const [notesItems, setNotesItems] = useState([]);
  const [selectedNotesItem, setSelectedNotesItem] = useState({});
  const [appMode, setAppMode] = useState("")

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
        <FontAwesomeIcon icon={faCheck} size="4x" className="checkIcon"/>
        </>
      )
    }
    else if (appMode === "edit"){
      <>
        <FontAwesomeIcon icon={faXmark} size="4x" className="addXmark"/>
        <FontAwesomeIcon icon={faUpload} size="4x" className="uploadIcon"/>
        <FontAwesomeIcon icon={faTrashCan} size="4x" className="deleteIcon"/>
        <FontAwesomeIcon icon={faCheck} size="4x" className="checkIcon"/>
        </>

    }
    else if (appMode === "selected"){
      return(
        <>
        <FontAwesomeIcon icon={faPenToSquare} size="4x" className="editIcon"/>
        <FontAwesomeIcon icon={faTrashCan} size="4x" className="deleteIcon"/>
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
  <input type="text" name="search" placeholder="Search.." />
    <NotesList notesItems={notesItems} handleSelectNotesItemClick={(value) => handleSelectNotesItemClick(value)} />
  

    <FontAwesomeIcon onClick={() => setAppMode("add")} icon={faPlusCircle} size="4x" className="addIcon"/>
    
    
     </div>
    <div className="div2">
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