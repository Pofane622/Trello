import React, { useState } from 'react'
import './edit.css'
import { MdClose } from 'react-icons/md'
import { FaTrash } from 'react-icons/fa'

export function Edit({ onClose, card, onSave, onDelete }) {
  const [newTitle, setNewTitle] = useState("")

  function handleSave() {
    if (newTitle.trim() !== "") {
      onSave({ ...card, title: newTitle.trim() })
    }
    onClose()
  }

  function handleDelete() {
    if (window.confirm('Delete this card?')) {
      onDelete(card.id)
    }
    onClose()
  }

  return (
    <div className='edit'>
      <div className='inner-edit'>
        
        {/* Header */}
        <div className='edit-header'>
          <span>Edit Card</span>
          <MdClose size={20} onClick={onClose} className='edit-close' />
        </div>

        {/* Input */}
        <input
          className='edit-input'
          type='text'
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          autoFocus
        />

        {/* Buttons */}
        <div className='edit-buttons'>
          <button className='edit-cancel-btn' onClick={onClose}>Cancel</button>
          <button className='edit-save-btn' onClick={handleSave}>Save</button>
        </div>

        {/* Delete */}
        <div className='edit-delete-section'>
          <button className='edit-delete-btn' onClick={handleDelete}>
            <FaTrash /> Delete Card
          </button>
        </div>

      </div>
    </div>
  )
}