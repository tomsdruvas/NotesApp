import React from 'react'
import '../styles/Style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons'


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
    <div class="div2">Notes Title</div>
    </div>
    </>
  )
}

export default MainContainer