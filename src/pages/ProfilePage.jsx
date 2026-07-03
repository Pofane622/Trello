import React, { useEffect, useRef, useState } from 'react'
import './profilepage.css'
import { CgProfile } from 'react-icons/cg'
import { FaUserCircle } from 'react-icons/fa'

export function ProfilePage() {

  const [profileImage, setProfileImage] = useState(() => {
    const saved = localStorage.getItem("profilePicture")
    return saved || null
  })

  const fileInputRef = useRef(null)

  useEffect(() => {
    if (profileImage) {
      localStorage.setItem("profilePicture", profileImage)
    }
  }, [profileImage])

  function setProfilePicture(event) {
    const file = event.target.files[0]
    if (!file) return

    if (!file.type.startsWith("image/")) {
      alert("Please select an image")
      return
    }

    const imageUrl = URL.createObjectURL(file)
    setProfileImage(imageUrl)
    event.target.value = ""
  }

  return (
    <div className='settings-container'>

      {/* ===== SIDEBAR ===== */}
      <div className='settings-sidebar'>
        <h2 className='sidebar-title'>Personal Settings</h2>

        <div className='sidebar-menu'>
          <div className='sidebar-menu-item active'>
            <CgProfile className='sidebar-icon' />
            <span>Profile and Visibility</span>
          </div>
        </div>

        <div className='sidebar-divider'></div>

      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className='settings-main'>
        <div className='settings-space'>

          {/* Header */}
          <div className='settings-header'>
            <h1>Profile and Visibility</h1>
            <p>Manage your personal information</p>
          </div>

          {/* Profile Picture Section */}
          <div className='profile-section'>
            <div className='profile-picture'>
              {profileImage ? (
                <img
                  src={profileImage}
                  alt='Profile'
                  className='profile-avatar-large'
                />
              ) : (
                <FaUserCircle className='profile-avatar-large' />
              )
              }

              <input
                type='file'
                accept='image/*'
                onChange={setProfilePicture}
                ref={fileInputRef}
                style={{ display: 'none' }}
              />

              <button className='upload-btn' onClick={() => fileInputRef.current?.click()} >Upload new photo</button>
            </div>
            <div className='profile-info'>
              <p><strong>Trello Workspace</strong></p>
              <p className='profile-description'>
                This is an Atlassian account. Edit your personal information and visibility
                settings through your Atlassian profile.
              </p>
              <p className='profile-terms'>
                To learn more, view our Terms of Service or Privacy Policy.
              </p>
            </div>
          </div>

          {/* Required Fields Notice */}
          <div className='required-notice'>
            <span>Required fields are marked with an asterisk <span className='asterisk'>*</span></span>
          </div>

          {/* Username Field */}
          <div className='form-section'>
            <label className='form-label'>
              Username <span className='asterisk'>*</span>
            </label>
            <div className='username-display'>
              <span className='username-text'>pofanematlali</span>
              <span className='premium-badge'>PREMIUM</span>
            </div>
            <p className='field-description'>
              Always public. Visible to anyone on the internet, including those that find you through
              search engines like Google.
            </p>
          </div>

          {/* Bio Field */}
          <div className='form-section'>
            <label className='form-label'>Bio</label>
            <textarea
              className='bio-textarea'
              placeholder='Tell us about yourself...'
              rows={4}
            ></textarea>
            <p className='field-description'>
              Always public. Visible to anyone on the internet, including those that find you through
              search engines <strong>like</strong> Google.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}