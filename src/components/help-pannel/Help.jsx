import React from 'react'
import './help.css'
import { MdClose } from 'react-icons/md'
import { FaRocket } from 'react-icons/fa'
import { IoBulbOutline } from 'react-icons/io5'

export function Help({ onClose }) {
  return (
    <div className='outer-help' onClick={onClose}>
    <div className='help' onClick={(e)=>{e.stopPropagation()}}>
      <div className='inner-help'>
        
        {/* Header */}
        <div className='help-header'>
          <span>Help</span>
          <MdClose size={20} onClick={onClose} className='help-close' />
        </div>

        {/* Main Message */}
        <div className='help-main'>
          <div className='help-icon-wrapper'>
            <FaRocket className='help-main-icon' />
          </div>
          <p className='help-main-text'>
            Make boards more powerful with <span className='help-highlight'>Trello Power-Ups</span>
          </p>
        </div>

        {/* Tip Link */}
        <div className='help-tip'>
          <IoBulbOutline className='help-tip-icon' />
          <span>Get a new tip.</span>
        </div>

        {/* Footer Links */}
        <div className='help-footer'>
          <a href='#' className='help-link'>Pricing</a>
          <a href='#' className='help-link'>Apps</a>
          <a href='#' className='help-link'>Blog</a>
          <a href='#' className='help-link'>Privacy.</a>
          <a href='#' className='help-link'>Notice at Collection</a>
          <a href='#' className='help-link'>More...</a>
        </div>

      </div>
    </div>
    </div>
  )
}