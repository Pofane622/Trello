import React, { useState } from 'react'
import './menusettings.css'
import { MdClose } from 'react-icons/md'
import { BackgroundPicker } from '../backgroundpicker/BackgroundPicker'
import { Settings } from '../settings/Settings'

export function MenuSettings({ onClose, onSelect }) {

  const [openBackgroundColor, setOpenBackgroundColor] = useState(false)
  const [openSettings, setOpenSettings] = useState(false)

  function closeBackground() {
    setOpenBackgroundColor(false)
  }

  function closeSettings() {
    setOpenSettings(false)
  }

  return (
    <div className='outer-menu' onClick={onClose}>
      <div className='menu-bar' onClick={(e) => { e.stopPropagation() }}>
        <div className='inside-menu-bar'>

          <div className='menu-header'>
            <span>Menu</span>
            <MdClose size={20} onClick={onClose} />
          </div>

          <div className='about-board'>

            <div className='about-board-paragraphs'>
              <p className='about-title'>About this board</p>
              <p className='about-explanation'>Add a description to your board</p>
            </div>
          </div>
          <div className='visibility-section'>
            <p>Visibility</p>
            <span>Private</span>
          </div>
          <div className='menu-items'>
            <div className='menu-item' onClick={() => { setOpenSettings(true) }}>Settings</div>
            {openSettings && <Settings onClose={closeSettings} />}
            <div className='menu-item' onSelect={onSelect} onClick={() => { setOpenBackgroundColor(true) }} >Change background</div>
            {openBackgroundColor && <BackgroundPicker onSelect={onSelect} onClose={closeBackground} />}
          </div>

        </div>
      </div>
    </div>
  )
}