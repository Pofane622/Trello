import './listform.css'
import React, { useState } from 'react'
import { MdClose } from 'react-icons/md';

export function ListForm({onClose, setBoards, boards, activeBoardId}) {

  const [typing, setTyping] = useState("") 

   function addingList() {
  const newList = {
    id: Date.now(),
    name: typing,
    cards: [],
    color: "#000000"
  }

  // Find the active board and add the list to it
  const updatedBoards = boards.map(board => {
    if (board.id === activeBoardId) {
      return {
        ...board,
        lists: [...board.lists, newList]
      }
    }
    return board
  })

  setBoards(updatedBoards)
  onClose()
}


  return (
    <div className='form-cover'>
      <div className='inside-cover'>
        <input 
        className='input-box' 
        type='text' 
        placeholder='Enter list name...'
        value={typing}
        onChange={(event)=>{setTyping(event.target.value)}} />
        <div className='add-buttons'>
          <button className='add-list' onClick={addingList}>Add list</button>
          <MdClose size={25} onClick={onClose} className='x-close'/>
        </div>
      </div>
    </div>
  )
}
