import './navbar.css'
import React, { useState } from 'react'
import trello from './images/trello logo.png'
import { FiMic } from 'react-icons/fi'
import { IoNotificationsOutline } from 'react-icons/io5';
import { MdOutlineInfo } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { CreatePannel } from './create-pannel/CreatePannel'
import { Thoughts } from './share-thoughts/Thoughts'
import { Notifications } from './notifications-pannel/Notifications'
import { Help } from './help-pannel/Help'
import { Accounts } from './accounts/Accounts'
import { useNavigate } from 'react-router';

export function NavBar({createBoard, search, handleSearch }) {

    const [openCreatePannel, setOpenCreatePannel] = useState(false) 
    const [openThoughts, setOpenThoughts] = useState(false)
    const [openNotifications, setOpenNotifications] = useState(false)
    const [openHelpIcon, setOpenHelpIcon] = useState(false)
    const [openAccounts, setOpenAccounts] = useState(false)

    const navigate = useNavigate()

  function closeCreatePannel() {
    setOpenCreatePannel(false)
  }

  function closeAccounts(){
    setOpenAccounts(false)
  }

  function closeHelpIcon(){
    setOpenHelpIcon(false)
  }

  function closeNotifications(){
    setOpenNotifications(false)
  }

  function closeThoughts(){
    setOpenThoughts(false)
  }

  

  return (
    <div className='navigation-bar'>
      <div className='left-nav-bar' onClick={()=>{navigate('/')}}>
        <img className='trello-logo' alt='logo' src={trello}/>
        <span className='logo-name'>Trello</span>
      </div>

      <div className='middle-nav-bar'>
        
        <input placeholder='Search' className='search-bar' type='text' value={search} onChange={handleSearch} />
        <button className='create-button' onClick={()=>{setOpenCreatePannel(true)}}>Create</button>
        {openCreatePannel && <CreatePannel onClose={closeCreatePannel} createBoard={createBoard} />}
      </div>

      <div className='right-nav-bar'>
        <FiMic size={24} className='icons' onClick={()=>{setOpenThoughts(true)}} />
          {openThoughts && <Thoughts onClose={closeThoughts} />}

        <IoNotificationsOutline size={24} className='icons' onClick={()=>{setOpenNotifications(true); console.log('cliked')}} />
          {openNotifications && <Notifications onClose={closeNotifications} />}

        <MdOutlineInfo size={24} className='icons' onClick={()=>{setOpenHelpIcon(true)}} />
          {openHelpIcon && <Help onClose={closeHelpIcon} />}

        <CgProfile size={24} className='icons' onClick={()=>{setOpenAccounts(true)}} />
          {openAccounts && <Accounts onClose={closeAccounts} />}

      </div>
      
    </div>
  )
}


