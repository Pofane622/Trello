import React from 'react'
import './manageaccount.css'
import { MdClose } from 'react-icons/md'

function ManageAccount({ onClose }) {
  return (
    <div className='manage-account-overlay'>
      <div className='manage-account-modal'>
        
        {/* Close Button */}
        <button className='manage-close-btn' onClick={onClose}>
          <MdClose size={24} />
        </button>

        {/* Icon */}
        <div className='manage-icon'>⚠️</div>

        {/* Message */}
        <h2 className='manage-title'>Something went wrong</h2>
        <p className='manage-message'>
          Sorry, we are not able to process your information. Please try again later.
        </p>

        {/* Button */}
        <button className='manage-action-btn' onClick={onClose}>
          Try Again Later
        </button>

      </div>
    </div>
  )
}

export default ManageAccount