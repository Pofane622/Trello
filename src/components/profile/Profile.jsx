import React from 'react'
import './profile.css'
import { MdClose } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { NavLink } from 'react-router'

export function Profile({ onClose }) {
  return (
    <div className='outer-profile' onClick={onClose}>
    <div className='profile-card' onClick={(e)=>{e.stopPropagation()}}>
      <div className='profile-insider'>
        
        <div className='top-profile'>
          <div className='profile-avatar'>
            <CgProfile size={50} color="white" />
          </div>
          <div className='profile-close'>
            <MdClose size={20} onClick={onClose} className='profile-x-icon' />
          </div>
        </div>

        <div className='lower-profile'>
          <div className='user-info'>
            <span className='user-name'>Pofane Matlali</span>
            <span className='user-username'>@pofanematlali</span>
          </div>

          <div className='profile-actions'>
            <div className='profile-action-item'>
              <NavLink to='/profile' >Edit profile info</NavLink>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  )
}