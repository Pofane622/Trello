import React from 'react'
import './table.css'

export function Table({ boards, currentLists, turnBoardView }) {
  // Check if there are any cards to display
  const hasCards = currentLists.some(list => list.cards.length > 0)

  return (
    <div className='table-container'>
      
      {/* Back button */}
      <button className='table-back-btn' onClick={turnBoardView}>
        ← Back to Board
      </button>

      {hasCards ? (
        <table>
          <thead>
            <tr>
              <th>Card</th>
              <th>List</th>
              <th>Labels</th>
              <th>Members</th>
              <th>Due date</th>
            </tr>
          </thead>

          <tbody>
            {currentLists.map((list) => {
              return list.cards.map((card) => {
                return (
                  <tr key={card.id}>
                    <td>{card.title}</td>
                    <td>{list.name}</td>
                    <td>—</td>
                    <td>—</td>
                    <td>—</td>
                  </tr>
                )
              })
            })}
          </tbody>
        </table>
      ) : (
        <div className='table-empty'>
          <span>📋 No cards yet</span>
          <p>Add some cards to your lists to see them here.</p>
        </div>
      )}

    </div>
  )
}