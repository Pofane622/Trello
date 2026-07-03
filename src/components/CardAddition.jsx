import React, { useState } from 'react'
import './cardaddition.css'
import { MdClose } from 'react-icons/md'

export function CardAddition({onClose, onAdd}) {

  const [todoTyping, setTodoTyping] = useState("")

  function handleAddCard(){
    if(todoTyping.trim !== ""){
      onAdd(todoTyping)
      setTodoTyping("")
    }
  }

  return (
    <div className='form-cover'>
      <div className='inside-cover' >
        <input
          className='input-box'
          type='text'
          placeholder='Enter a title or paste a link'
          value={todoTyping}
          onChange={(event) => { setTodoTyping(event.target.value) }} />
        <div className='add-buttons'>
          <button className='add-list' onClick={handleAddCard}>Add a card</button>
          <MdClose size={25} onClick={onClose} className='x-close' />
        </div>
      </div>
    </div>
  )
}

