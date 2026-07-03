import React from 'react'
import './supportcontact.css'

export function SupportContact({ onClose }) {
  return (
    <div className='support-contact'>
      <div className='support-contact-modal'>
        
        {/* Close button */}
        <button className='modal-close-btn' onClick={onClose}>✕</button>

        {/* Icon */}
        <div className='modal-icon'>
          <span>💬</span>
        </div>

        {/* Title */}
        <h2 className='modal-title'>Contact Support</h2>

        {/* Description */}
        <p className='modal-description'>
          Our team is here to help. Please describe your issue and we'll get back to you as soon as possible.
        </p>

        {/* Button */}
        <button className='modal-action-btn' onClick={onClose}>
          Got it
        </button>

      </div>
    </div>
  )
}