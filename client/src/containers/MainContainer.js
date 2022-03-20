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
import { NotesSearch } from '../components/NotesSearch';
import Swal from 'sweetalert2';










const MainContainer = () => {

  const [notesItems, setNotesItems] = useState([]);
  const [selectedNotesItem, setSelectedNotesItem] = useState({});
  const [appMode, setAppMode] = useState("selected");
  const [activeEditNote, setActiveEditNote] = useState({});
  const [newNotesObject, setNewNotesObject] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [contentValueEdit, setContentValueEdit] = useState("");




  const requestAll = function(){
    const request = new Request();
    const notesItemsPromise = request.get('/api/notes')

    Promise.resolve(notesItemsPromise)
    .then((data) => {
      setNotesItems(data);
      if(Object.keys(selectedNotesItem).length === 0){
        setSelectedNotesItem(data[0])
      }
    })
  }

  useEffect(()=>{
    requestAll();
  },[])

  useEffect(() => {
    const results = notesItems.filter(notesItem =>
      notesItem.title.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm, notesItems]);

  const showContentIcons = () => {
    if(appMode === "add"){
      return (
        <>
        <FontAwesomeIcon onClick={handleCancelAdd} icon={faXmark} size="4x" className="addXmark"/>
        <FontAwesomeIcon icon={faUpload} size="4x" className="uploadIcon"/>
        <FontAwesomeIcon onClick={handleSubmitNewNotesItem} icon={faCheck} size="4x" className="checkIcon"/>
        </>
      )
    }
    else if (appMode === "edit"){
      return(
        <>
        <FontAwesomeIcon onClick={() => setAppMode("selected")} icon={faXmark} size="4x" className="addXmark"/>
        <FontAwesomeIcon icon={faUpload} size="4x" className="uploadIcon"/>
        <FontAwesomeIcon onClick={deleteNotesItem} icon={faTrashCan} size="4x" className="deleteIcon"/>
        <FontAwesomeIcon onClick={handleSubmitEditedNotesItem} icon={faCheck} size="4x" className="checkIcon"/>
        </>
        )

    }
    else if (appMode === "selected"){
      return(
        <>
        <FontAwesomeIcon onClick={handleEditComponent} icon={faPenToSquare} size="4x" className="editIcon"/>
        <FontAwesomeIcon onClick={deleteNotesItem} icon={faTrashCan} size="4x" className="deleteIcon"/>
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

  const handleNotesDelete = async function(){
    const request = new Request();
    const url = "/api/notes/" + selectedNotesItem.id
    request.delete(url)
    .then(() => requestAll())
  }

  const deleteNotesItem = () => {
    handleNotesDelete()
    setAppMode("selected")
    setTimeout(() => {
      setSelectedNotesItem(notesItems[0])
    }, 250);
  }

  const handleEditComponent = () => {
    setContentValueEdit(selectedNotesItem.content)
    setAppMode("edit")

  }

  const handleCancelAdd = () => {
    setAppMode("selected")
    setContentValue("")
      setTimeout(() => {
        setNewNotesObject({})
      }, 100);

  }
    

  

  const handleNotesUpdate = function(notesObj){
    const request = new Request();
    request.patch('/api/notes/' + notesObj.id, notesObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      setSelectedNotesItem(data);
    })
    .then(() => requestAll());
  }




  const handleSubmitNewNotesItem = () => {
    if (!newNotesObject.id){
      if(!newNotesObject.title || !newNotesObject.content){
         return Swal.fire({
          title: 'Error!',
          text: 'You need to to complete the title and content of the note',
          icon: 'error',
          confirmButtonText: 'Okay'
        })
      }
      handleNotesPost(newNotesObject)
      setAppMode("selected")
      setContentValue("")
      setTimeout(() => {
        setNewNotesObject({})
      }, 100);
      
    }
  }

  const handleSubmitEditedNotesItem = () => {
    if(!activeEditNote.title || !activeEditNote.content){
      return Swal.fire({
        title: 'Error!',
        text: 'You need to to complete the title and content of the note',
        icon: 'error',
        confirmButtonText: 'Okay'
      })
   }
    handleNotesUpdate(activeEditNote)
    setAppMode("selected")
    setTimeout(() => {
      setActiveEditNote({})
    }, 100);

  }

    
    

    
  

  const toggleComponent = () => {
    if (appMode === "add"){
      return(
        <>
          <NotesAdd newNotesObject={newNotesObject} handleNewNotesObj={(newNotesObj) => setNewNotesObject(newNotesObj)} contentValue={contentValue} setContentValue={(value)=>setContentValue(value)} />
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
          <NotesEdit selectedNotesItem={selectedNotesItem} handleEditedNotesObj={(editedNotesObj) => setActiveEditNote(editedNotesObj)} contentValueEdit={contentValueEdit} setContentValueEdit={(value) => setContentValueEdit(value)} />
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
    <NotesSearch notesItems={notesItems} searchTerm={searchTerm} handleSearchTerm={(value) => setSearchTerm(value)} />
    <NotesList searchTerm={searchTerm} searchResults={searchResults} notesItems={notesItems} handleSelectNotesItemClick={(value) => handleSelectNotesItemClick(value)} />
  

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