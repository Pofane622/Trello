import React from 'react'
import './notifications.css'
import { MdClose } from 'react-icons/md'

export function Notifications({ onClose }) {
  return (
    <div className='outer-notifications' onClick={onClose}>
    <div className='notifications' onClick={(e)=>{e.stopPropagation()}}>
      <div className='inner-notifications'>
        
        {/* Header */}
        <div className='notifications-header'>
          <span>Notifications</span>
          <MdClose size={20} onClick={onClose} className='notifications-close' />
        </div>

        {/* Filter Toggle */}
        <div className='notifications-filter'>
          <div className='filter-toggle'>
            <span>Only show unread</span>
            <div className='filter-switch'>
              <div className='filter-thumb'></div>
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className='notifications-empty'>
          <span>No notifications</span>
        </div>

      </div>
    </div>
    </div>
  )
}