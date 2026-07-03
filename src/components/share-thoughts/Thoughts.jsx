import React, { useState } from 'react'
import './thoughts.css'
import { MdClose } from 'react-icons/md'
import { FaComment } from 'react-icons/fa'
import { IoHelpCircleOutline } from 'react-icons/io5'
import { ShareThoughts } from './thoughts-sharing/ShareThoughts'
import { SupportContact } from './support/SupportContact'

export function Thoughts({ onClose }) {

  const [openShareThoughts, setopenShareThoughts] = useState(false)
  const [openSupport, setOpenSupport] = useState(false)

  function closeSupport(){
    setOpenSupport(false)
  }

  function closeShareThoughts(){
    setopenShareThoughts(false)
  }

  return (
    <div className='outer-thoughts' onClick={onClose}>
    <div className='thoughts' onClick={(e)=>{e.stopPropagation()}}>
      <div className='inner-thoughts'>
        
        {/* Header */}
        <div className='thoughts-header'>
          <span>Share your thoughts on Trello</span>
          <MdClose size={20} onClick={onClose} className='thoughts-close' />
        </div>

        {/* Body */}
        <div className='thoughts-body'>
          
          {/* Share feedback option */}
          <div className='thoughts-option'>
            <FaComment className='thoughts-icon' />
            <div className='thoughts-option-text'>
              <span className='thoughts-option-title' onClick={()=>{setopenShareThoughts(true)}} >Share your thoughts on Trello</span>

              {openShareThoughts && <ShareThoughts onClose={closeShareThoughts} />}

              <span className='thoughts-option-sub' >Tell us what you think</span>

            </div>
          </div>

          {/* Contact support option */}
          <div className='thoughts-option'>
            <IoHelpCircleOutline className='thoughts-icon' />
            <div className='thoughts-option-text'>
              <span className='thoughts-option-title'  onClick={()=>{setOpenSupport(true); console.log("clicked")}}>Contact support</span>

              {openSupport && <SupportContact onClose={closeSupport} />}

              <span className='thoughts-option-sub'>Get help with an issue</span>
            </div>
          </div>

        </div>

      </div>
    </div>
    </div>
  )
}