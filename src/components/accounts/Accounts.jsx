import React, { useState } from 'react'
import './accounts.css'
import { MdClose } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { FaExchangeAlt } from 'react-icons/fa'
import { IoSettingsOutline } from 'react-icons/io5'
import SwitchAccount from './switch-account/SwitchAccount'
import ManageAccount from './manage-account/ManageAccount'

export function Accounts({ onClose }) {

  const [openManage, setOpenManage] = useState(false)
  const [openSwitch, setOpenSwitch] = useState(false)

  function closeSwitch(){
    setOpenSwitch(false)
  }

  function closeManage(){
    setOpenManage(false)
  }

  return (
    <div className='outer-accounts' onClick={onClose}>
    <div className='accounts' onClick={(e)=>{e.stopPropagation()}}>
      <div className='inner-accounts'>
        
        {/* Header */}
        <div className='accounts-header'>
          <span>ACCOUNT</span>
          <MdClose size={20} onClick={onClose} className='accounts-close' />
        </div>

        {/* User Profile */}
        <div className='accounts-profile'>
          <div className='accounts-avatar'>
            <CgProfile className='avatar-icon' />
          </div>
          <div className='accounts-user-info'>
            <span className='accounts-username'>Pofane Matlali</span>
            <span className='accounts-email'>pofane3@gmail.com</span>
          </div>
        </div>

        {/* Switch Accounts */}
        <div className='accounts-option' onClick={()=>{setOpenSwitch(true)}} >
          <FaExchangeAlt className='accounts-option-icon' />
          <span>Switch accounts</span>
        </div>

        {openSwitch && <SwitchAccount onClose={closeSwitch} />}

        {/* Manage Account */}
        <div className='accounts-option' onClick={()=>{setOpenManage(true)}}>
          <IoSettingsOutline className='accounts-option-icon' />
          <span>Manage account</span>
        </div>

        {openManage && <ManageAccount onClose={closeManage} />}

      </div>
    </div>
    </div>
  )
}