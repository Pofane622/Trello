import React, { useState } from 'react'
import './createboard.css'
import { MdClose } from 'react-icons/md'

export function CreateBoard({onCreateBoard, onClose}) {

  const [typingTitle, setTypingTitle] = useState("")

  function handleCreateBoard(){
    onCreateBoard(typingTitle)
    onClose()
  }

  return (
    <div className='create-container'>
      <div className='create-container-margin'>
        
        {/* Header */}
        <div className='create-board-header'>
          <span>Create board</span>
          <MdClose size={24} className='create-close' onClick={onClose} />
        </div>

        {/* Background Section */}
        <div className='background-preview'>
          <div className='background-preview-inner'>
            <span className='preview-title'>Background</span>
            <div className='preview-box'>
              <span className='preview-board-name'>Board title</span>
            </div>
          </div>
        </div>

        {/* Board Title Input */}
        <div className='form-group'>
          <label className='form-label'>
            Board title <span className='required-star'>*</span>
          </label>
          <input 
            type='text' 
            className='form-input'
            placeholder='Board title is required'
            value={typingTitle}
            onChange={(e)=>{setTypingTitle(e.target.value)}}
          />
        </div>

        {/* Visibility */}
        <div className='form-group'>
          <label className='form-label'>Visibility</label>
          <select className='form-select'>
            <option value="Workspace">Workspace</option>
            <option value="Private">Private</option>
            <option value="Public">Public</option>
          </select>
        </div>

        {/* Workspace */}
        <div className='form-group'>
          <label className='form-label'>Workspace</label>
          <div className='workspace-display'>
            <span>Workspace</span>
          </div>
        </div>

        {/* Create Button */}
        <button className='create-btn' onClick={handleCreateBoard} >
          Create
        </button>

        {/* Start with a template */}
        <div className='template-link'>
          <span>Start with a template</span>
        </div>

      </div>
    </div>
  )
}