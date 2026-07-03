import React from 'react'
import './views.css'
import { MdClose } from 'react-icons/md'
import { FiGrid } from 'react-icons/fi';
import { FiTable } from 'react-icons/fi';

export function Views({onClose, boards, setCurrentView}) {

  return (
    <div className='outer-views' onClick={onClose} >
    <div className='views' onClick={(e)=>{e.stopPropagation()}}>
      <div className='inner-views'>
        <div className='views-header'>
          <span>Views</span>
          <MdClose size={24} onClick={onClose} className='x' />
        </div>
        <div className='board-div' onClick={()=>{setCurrentView("Board"); onClose()}} >
          <FiGrid />
          <span >Board</span>
        </div>
        <div className='board-div' onClick={()=>{setCurrentView("Table"); onClose()}} >
          <FiTable />
          <span>Table</span>
        </div>
      </div>
    </div>
    </div>
  )
}
