import React, { useState } from 'react'
import './backgroundpicker.css'
import { MdClose } from 'react-icons/md'

export function BackgroundPicker({ onSelect, onClose }) {
  const [activeTab, setActiveTab] = useState("photos")

  const photos = [
    { id: 1, name: "city buildings", url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "high rise buildings", url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, name: "concrete roads", url: "https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, name: "foggy mountain", url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 5, name: "mountains and trees", url: "https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?q=80&w=844&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 6, name: "snowflake", url: "https://images.unsplash.com/photo-1457269449834-928af64c684d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 7, name: "lions", url: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 8, name: "leopard", url: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 9, name: "ocean", url: "https://images.unsplash.com/photo-1530053969600-caed2596d242?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 10, name: "sunset", url: "https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ]

  const colors = [
    { id: 1, name: "White", value: "#ffffff" },
    { id: 2, name: "Light Gray", value: "#f3f4f6" },
    { id: 3, name: "Dark Blue", value: "#1a1a2e" },
    { id: 4, name: "Dark Gray", value: "#2d2d3a" },
    { id: 5, name: "Green", value: "#4caf50" },
    { id: 6, name: "Blue", value: "#2196f3" },
    { id: 7, name: "Purple", value: "#9c27b0" },
    { id: 8, name: "Red", value: "#f44336" },
    { id: 9, name: "Orange", value: "#ff9800" },
    { id: 10, name: "Black", value: "#000000" }
  ]

  // Functions
  function handlePhotoSelect(photo) {
    onSelect(`url(${photo.url})`)
    onClose()
  }

  function handleColorSelect(color) {
    onSelect(color.value)
    onClose()
  }

  return (
    <div className='background-paper'>
      <div className='background-insider'>
        
        {/* Header with close icon */}
        <div className='bg-header'>
          <span>Change background</span>
          <MdClose size={20} onClick={onClose} className='bg-close' />
        </div>

        {/* Tabs */}
        <div className='bg-tabs'>
          <div 
            className={`bg-tab ${activeTab === "photos" ? "active" : ""}`}
            onClick={() => setActiveTab("photos")}
          >
            Photos
          </div>
          <div 
            className={`bg-tab ${activeTab === "colors" ? "active" : ""}`}
            onClick={() => setActiveTab("colors")}
          >
            Colors
          </div>
        </div>

        {/* Content based on active tab */}
        <div className='bg-content'>
          {activeTab === "photos" && (
            <div className='bg-grid photos-grid'>
              {photos.map(photo => (
                <div
                  key={photo.id}
                  className='bg-item photo-item'
                  style={{ backgroundImage: `url(${photo.url})` }}
                  onClick={() => handlePhotoSelect(photo)}
                  title={photo.name}
                />
              ))}
            </div>
          )}

          {activeTab === "colors" && (
            <div className='bg-grid colors-grid'>
              {colors.map(color => (
                <div
                  key={color.id}
                  className='bg-item color-item'
                  style={{ backgroundColor: color.value }}
                  onClick={() => handleColorSelect(color)}
                  title={color.name}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}