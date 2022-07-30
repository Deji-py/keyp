import { faHouseChimneyWindow, faJournalWhills, faPalette } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <>
    <div className='footer flex__layout'>
        <p>copyright @2022 </p>
        <p style={{marginTop:"10px"}}>Ayodeji Alakija</p>
        <ul style={{margin:'20px'}}>
            <li className='links'>Home</li>
            <li className='links'>About</li>
            <li className='links'>Services</li>
        </ul>
        <h6 className='sponsor flex__layout' >powered by:<h3>
            <FontAwesomeIcon icon={faPalette} size="xl" style={{marginLeft:"10px", color:"gray"}}/>
            <FontAwesomeIcon icon={faHouseChimneyWindow} size="xl" style={{marginLeft:"10px", color:"gray"}}/>
            <FontAwesomeIcon icon={faJournalWhills} size="xl" style={{marginLeft:"10px", color:"gray"}} />
            </h3></h6>
        
    </div>

    </>
  )
}

export default Footer