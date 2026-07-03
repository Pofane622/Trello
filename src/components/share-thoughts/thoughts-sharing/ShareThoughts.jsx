import React from 'react'
import './sharethoughts.css'

export function ShareThoughts({ onClose }) {
  return (
    <div className='share-thoughts-overlay'>
      <div className='share-thoughts-modal'>
        
        {/* Modal Content */}
        <div className='modal-content'>
          <p className='modal-message'>
            Sorry, you need to create a real account first.
          </p>
          <button className='modal-button' onClick={onClose}>
            Okay
          </button>
        </div>

      </div>
    </div>
  )
}