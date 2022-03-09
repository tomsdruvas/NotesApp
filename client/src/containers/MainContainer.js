import React from 'react'
import '../styles/Style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import {faUpload} from '@fortawesome/free-solid-svg-icons'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'






const MainContainer = () => {
  return (<>
    
    <div class="parent">
    <div class="div1">
  <input type="text" name="search" placeholder="Search.." />
  <div class="divForList">
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

    <FontAwesomeIcon icon={faPlusCircle} size="4x" className="addIcon"/>
    
    
     </div>
    <div class="div2">Notes Title
    <div class="divForList">


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
    <FontAwesomeIcon icon={faXmark} size="4x" className="addXmark"/>
    <FontAwesomeIcon icon={faTrashCan} size="4x" className="deleteIcon"/>
    <FontAwesomeIcon icon={faUpload} size="4x" className="uploadIcon"/>
    <FontAwesomeIcon icon={faCheck} size="4x" className="checkIcon"/>
    <FontAwesomeIcon icon={faPenToSquare} size="4x" className="editIcon"/>


    


    

    


    
    </div>
    </div>
    </>
  )
}

export default MainContainer