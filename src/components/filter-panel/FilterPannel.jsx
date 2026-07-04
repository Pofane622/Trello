import './filterpannel.css'
import { MdClose } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'

export function FilterPannel({ onClose, setCompletedCardIDs, completedCardIDs, markedComplete, setMarkedComplete, notMarkedComplete, setNotMarkedComplete }) {

  return (
    <div className='outer-filter' onClick={onClose}>
    <div className='filter' onClick={(e)=>{e.stopPropagation()}}>
      <div className='inner-filter'>
        
        {/* Header */}
        <div className='filter-header'>
          <span>Filter</span>
          <MdClose size={20} onClick={onClose} className='filter-close' />
        </div>

        {/* Keyword Search */}
        <div className='filter-section'>
          <div className='filter-section-title'>Keyword</div>
          <div className='keyword-input-wrapper'>
            <FiSearch className='keyword-icon' />
            <input 
              type='text' 
              className='keyword-input' 
              placeholder='Enter a keyword...' 
            />
          </div>
          <p className='keyword-hint'>Search cards, members, labels, and more.</p>
        </div>

        {/* Card Status */}
        <div className='filter-section'>
          <div className='filter-section-title'>Card status</div>
          <div className='filter-option'>
            <input 
              type='checkbox' 
              className='filter-checkbox' 
              checked={markedComplete}
              onChange={() => setMarkedComplete(!markedComplete)}
            />
            <span>Marked as complete</span>
          </div>
          <div className='filter-option'>
            <input 
              type='checkbox' 
              className='filter-checkbox' 
              checked={notMarkedComplete}
              onChange={() => setNotMarkedComplete(!notMarkedComplete)}
            />
            <span>Not marked as complete</span>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}