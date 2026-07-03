import React from 'react'
import './switchaccount.css'
import { MdClose } from 'react-icons/md'

function SwitchAccount({ onClose }) {
  return (
    <div className='switch-account-overlay'>
      <div className='switch-account-modal'>
        
        {/* Close Button */}
        <button className='switch-close-btn' onClick={onClose}>
          <MdClose size={24} />
        </button>

        {/* Icon */}
        <div className='switch-icon'>🔒</div>

        {/* Message */}
        <h2 className='switch-title'>Access Restricted</h2>
        <p className='switch-message'>
          Sorry, we are not able to process your information. Please try again later.
        </p>

        {/* Button */}
        <button className='switch-action-btn' onClick={onClose}>
          Okay
        </button>

      </div>
    </div>
  )
}

export default SwitchAccount