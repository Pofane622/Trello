import React, { useState } from 'react'
import './settings.css'
import { MdClose } from 'react-icons/md'
import { MdCheck } from 'react-icons/md'

export function Settings({ onClose }) {
  // State for toggles
  const [workspaceEditing, setWorkspaceEditing] = useState(false)
  const [completeStatus, setCompleteStatus] = useState(false)
  const [cardCovers, setCardCovers] = useState(true)

  return (
    <div className='settings-form'>
      <div className='inner-settings'>

        <div className='settings-header'>
          <span>Settings</span>
          <MdClose size={20} onClick={onClose} className='settings-close' />
        </div>

        <div className='settings-section'>
          <div className='settings-section-title'>Workspace</div>
          <div className='settings-item'>
            <span className='settings-item-label'>Trello Workspace</span>
          </div>
        </div>

        <div className='settings-section'>
          <div className='settings-section-title'>Permissions</div>
          
          <div className='settings-item'>
            <span className='settings-item-label'>Commenting Members</span>
          </div>
          
          <div className='settings-item'>
            <span className='settings-item-label'>Adding and removing members Members</span>
          </div>
          
          <div className='settings-item settings-item-toggle'>
            <div className='settings-item-text'>
              <span className='settings-item-label'>Workspace editing</span>
              <p className='settings-item-description'>
                Any Workspace member can edit and join this board. To enable this, the board can't be private.
              </p>
            </div>
            <div 
              className={`toggle-switch ${workspaceEditing ? 'active' : ''}`}
              onClick={() => setWorkspaceEditing(!workspaceEditing)}
            >
              <div className='toggle-thumb'></div>
            </div>
          </div>
        </div>

        <div className='settings-section'>
          <div className='settings-section-title'>Complete status</div>
          
          <div className='settings-item settings-item-toggle'>
            <div className='settings-item-text'>
              <span className='settings-item-label'>Show complete status on card front</span>
            </div>
            <div 
              className={`toggle-switch ${completeStatus ? 'active' : ''}`}
              onClick={() => setCompleteStatus(!completeStatus)}
            >
              <div className='toggle-thumb'></div>
            </div>
          </div>
        </div>

        <div className='settings-section'>
          <div className='settings-section-title'>Covers</div>
          
          <div className='settings-item settings-item-toggle'>
            <div className='settings-item-text'>
              <span className='settings-item-label'>Card covers enabled</span>
              <p className='settings-item-description'>
                Show image attachments and colors on the front of cards.
              </p>
            </div>
            <div 
              className={`toggle-switch ${cardCovers ? 'active' : ''}`}
              onClick={() => setCardCovers(!cardCovers)}
            >
              <div className='toggle-thumb'></div>
            </div>
          </div>
        </div>

        <div className='settings-section'>
          <div className='settings-section-title'>Collections</div>
          <div className='settings-item settings-item-premium'>
            <span className='settings-item-label'>PREMIUM</span>
          </div>
        </div>

      </div>
    </div>
  )
}