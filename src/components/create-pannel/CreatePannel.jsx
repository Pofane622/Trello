import React, { useState } from 'react'
import './createpannel.css'
import { MdClose } from 'react-icons/md'
import { FaRobot } from 'react-icons/fa'
import { FiPlus } from 'react-icons/fi'
import { HiOutlineViewGrid } from 'react-icons/hi'
import { BsLayoutThreeColumns } from 'react-icons/bs'
import { CreateBoard } from '../create-board/CreateBoard'

export function CreatePannel({ onClose, createBoard }) {

  const [openCreateBoard, setOpenCreateBoard] = useState(false)
   const [showErrorModal, setShowErrorModal] = useState(false)

  function closeCreateBoard(){
    setOpenCreateBoard(false)
  }

  function closeErrorModal() {
    setShowErrorModal(false)
  }

  return (
    <div className='outer-create-pannel' onClick={onClose}>
    <div className='create-pannel' onClick={(e)=>{e.stopPropagation()}}>
      <div className='insider-pannel'>
        
        <div className='create-header'>
          <span>Create</span>
          <MdClose size={20} onClick={onClose} className='create-close' />
        </div>

        <div className='create-item create-item-ai' onClick={()=>{setShowErrorModal(true)}}>
          <div className='create-item-header' >
            <FaRobot className='create-icon-ai' />
            <span className='create-item-title'>Create board with AI</span>
          </div>
          <p className='create-item-description'>
            Start with an idea. AI builds a board tailored to you instantly.
          </p>
          <span className='create-badge'>BETA</span>
        </div>

        <div className='create-item' onClick={()=>{setOpenCreateBoard(true)}}>
          <div className='create-item-header'>
            <BsLayoutThreeColumns className='create-icon' />
            <span className='create-item-title' >Create board</span>
            {openCreateBoard && <CreateBoard onCreateBoard={createBoard} onClose={closeCreateBoard} />}
          </div>
          <p className='create-item-description'>
            A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything.
          </p>
        </div>

      </div>
      {showErrorModal && (
        <div className='error-modal-overlay' onClick={closeErrorModal}>
          <div className='error-modal' onClick={(e) => e.stopPropagation()}>
            
            <button className='error-modal-close' onClick={closeErrorModal}>
              <MdClose size={24} />
            </button>

            <div className='error-modal-icon'>⚠️</div>
            <h2 className='error-modal-title'>Something went wrong</h2>
            <p className='error-modal-message'>
              Sorry, something failed. Please try again later.
            </p>
            <button className='error-modal-btn' onClick={closeErrorModal}>
              Try Again Later
            </button>

          </div>
        </div>
      )}

    </div>
    </div>
  )
}