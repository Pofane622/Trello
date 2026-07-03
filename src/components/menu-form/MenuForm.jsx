import React from 'react'
import './menuform.css'
import { MdClose } from 'react-icons/md';
export function MenuForm({ onClose, onColorChange, listID, onCopyList, onMoveList, onMoveAllCards, boards, activeBoardId, onDelete }) {

  const colors = [
    { name: "green", value: "#4caf50" },
    { name: "yellow", value: "#ffeb3b" },
    { name: "orange", value: "#ff9800" },
    { name: "purple", value: "#9c27b0" },
    { name: "red", value: "#f44336" },
    { name: "blue", value: "#2196f3" },
    { name: "teal", value: "#009688" },
    { name: "lime", value: "#cddc39" },
    { name: "magenta", value: "#e91e63" },
    { name: "black", value: "#1a1a1a" }
  ]

  function handleColorClick(colorValue) {
    onColorChange(listID, colorValue)
    onClose()
  }
  const activeBoard = boards.find(board => board.id === activeBoardId)
  const lists = activeBoard ? activeBoard.lists : []

  return (
    <div className='outer-menuForm' onClick={onClose}>
    <div className='menuForm' onClick={(e)=>{e.stopPropagation()}}>
        <div className='titles'>
          <span>List actions</span>
          <MdClose size={23} onClick={onClose} className='x-icon' />
        </div>
        <div className='menu-body'>
          <div className='first-menu-body'>
            <p onClick={() => { onCopyList(listID); onClose() }} >Copy list</p>
            <p onClick={() => { onMoveList(listID); onClose() }}>Move list</p>
            <p onClick={() => { onDelete(listID); onClose() }}>Delete list</p>
            <div>
              <p>Move all cards to...</p>
              <select
                onChange={(e) => {
                  onMoveAllCards(listID, Number(e.target.value))
                  onClose()
                }}
              >
                <option value="">Select a list</option>
                {lists.map(list => (
                  list.id !== listID && (
                    <option key={list.id} value={list.id}>
                      {list.name}
                    </option>
                  )
                ))}
              </select>
            </div>
          </div>

          <div className='second-menu-body'>
            <div className='heading'>
              <span>Change list color</span>
            </div>
            <div className='colors'>
              {colors.map((color) => (
                <div
                  key={color.name}
                  className={color.name}
                  style={{
                    backgroundColor: color.value,
                    borderRadius: "4px",
                    cursor: "pointer"
                  }}
                  onClick={() => { handleColorClick(color.value) }}

                />
              ))}
            </div>

          </div>

          <div className='third-menu-body'>

          </div>

        </div>
    </div>
    </div>
  )
}


