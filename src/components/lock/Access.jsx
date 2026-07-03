import React, { useState } from 'react'
import './access.css'
import { MdClose } from 'react-icons/md'
import { MdLockOutline } from 'react-icons/md';
import { MdBusinessCenter } from 'react-icons/md';
import { MdBusiness } from 'react-icons/md';
import { FaGlobe } from 'react-icons/fa';

export function Access({ onClose }) {

  const [enabledIds, setEnabledIds] = useState([])

  function handleToggle(id) {
    if (enabledIds.includes(id)) {
      setEnabledIds(enabledIds.filter(enabledid => enabledid !== id))
    } else {
      setEnabledIds([...enabledIds, id])
    }
  }

  const details = [
    {
      id: 1,
      icon: <MdLockOutline />,
      title: "Private",
      description: "Board members and trello workspace admins can see and edit this board"
    },
    {
      id: 2,
      icon: <MdBusinessCenter />,
      title: "Workspace",
      description: "All members of the trello workspace admins can see and edit this board"
    },
    {
      id: 3,
      icon: <MdBusiness />,
      title: "Organization",
      description: "All members of the organization can see this board. The board must be added to the enterprise workspace to enable this"
    },
    {
      id: 4,
      icon: <FaGlobe />,
      title: "Public",
      description: "Anyone with the internet can see this board. Only board members can edit"
    }
  ]

  return (
    <div className='outer-access' onClick={onClose}>
    <div className='access' onClick={(e)=>{e.stopPropagation()}}>
      <div className='access-restriction'>
        <div className='header-div'>
          <span>Change Visibility</span>
          < MdClose size={20} onClick={onClose} className='x' />
        </div>
        {details.map((items) => {
          const isEnabled = enabledIds.includes(items.id)

          return <div className='body-div' key={items.id}>
            <div className='body-div-head'>
              <div>{items.icon}
                <span>{items.title}</span>
              </div>


              <div className={`toggle-background ${isEnabled ? 'active' : ''}`} onClick={() => handleToggle(items.id)} >
                <div className='toggle-wheel'></div>
              </div>

            </div>
            <p className='description'>{items.description}</p>
          </div>
        })}
      </div>

    </div>
    </div>
  )
}
