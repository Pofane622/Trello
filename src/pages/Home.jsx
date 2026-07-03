import React, { useState } from 'react'
import './home.css'
import { CgProfile } from 'react-icons/cg'
import { MdFilterList } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { HiDotsHorizontal } from 'react-icons/hi'
import { VscCollapseAll } from 'react-icons/vsc';
import { ListForm } from '../components/ListForm';
import { CardAddition } from '../components/CardAddition';
import { MenuForm } from '../components/menu-form/MenuForm';
import { Views } from '../components/views/Views';
import { Profile } from '../components/profile/Profile';
import { Access } from '../components/lock/Access';
import { MenuSettings } from '../components/menu-settings/MenuSettings';
import { Table } from '../components/table-view/Table';
import { MdEdit } from 'react-icons/md';
import { Edit } from '../components/edit-icon/Edit';
import { horizontalListSortingStrategy, SortableContext } from '@dnd-kit/sortable'
import { FilterPannel } from '../components/filter-panel/FilterPannel';
import { FaRegStar } from 'react-icons/fa';

export function Home({ onSelectBackground, activeBoardId, boards, setBoards, setActiveBoardId, activeBoard, currentLists, filteredLists }) {

  const [addList, setAddList] = useState(false)
  const [collapsedLists, setCollapsedLists] = useState([])
  const [openProfile, setOpenProfile] = useState(false)
  const [openMenuSettings, setOpenMenuSettings] = useState(false)
  const [openLock, setOpenLock] = useState(false)
  const [openMenuID, setOpenMenuID] = useState(null)
  const [openViews, setOpenViews] = useState(false)
  const [activeListId, setActiveListId] = useState(null)
  const [currentView, setCurrentView] = useState("Board")
  const [openEditID, setOpenEditID] = useState(null)
  const [openFilterPannel, setOpenFilterPannel] = useState(false)
  const [completedCardIDs, setCompletedCardIDs] = useState([])
  const [markedComplete, setMarkedComplete] = useState(false)
  const [notMarkedComplete, setNotMarkedComplete] = useState(false)
  const [isStarred, setIsStarred] = useState(false)
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false)

  function toggleHamburgerMenu() {
    setOpenHamburgerMenu(!openHamburgerMenu)
  }


  function toggleStarOff() {
    setIsStarred(!isStarred)
  }

  function closeOpenFilter() {
    setOpenFilterPannel(false)
  }

  function updateCard(updatedCard) {
    const updatedBoards = boards.map((board) => {
      if (board.id === activeBoardId) {
        const updatedLists = board.lists.map((list) => {
          const updatedCards = list.cards.map((card) => {
            if (card.id === updatedCard.id) {
              return updatedCard
            }
            return card
          })
          return { ...list, cards: updatedCards }
        })
        return { ...board, lists: updatedLists }
      }
      return board
    })
    setBoards(updatedBoards)
  }

  function deleteCard(cardId) {
    const updatedBoards = boards.map(board => {
      if (board.id === activeBoardId) {
        const updatedLists = board.lists.map(list => {
          const filteredCards = list.cards.filter(card => card.id !== cardId)
          return { ...list, cards: filteredCards }
        })
        return { ...board, lists: updatedLists }
      }
      return board
    })
    setBoards(updatedBoards)
  }

  function closeEdit() {
    setOpenEditID(null)
  }

  function turnBoardView() {
    setCurrentView("Board")
  }



  function switchBoards(boardID) {
    setActiveBoardId(boardID)
  }

  function closeMenu() {
    setOpenMenuID(null)
  }

  function closeLock() {
    setOpenLock(false)
  }

  function closeViews() {
    setOpenViews(false)
  }

  function closeMenuSettings() {
    setOpenMenuSettings(false)
  }

  function closeCardForm() {
    setActiveListId(null)
  }

  function closeProfile() {
    setOpenProfile(false)
  }

  function closeList() {
    setAddList(false)
  }

  function listToCollapse(listID) {
    if (collapsedLists.includes(listID)) {
      setCollapsedLists(collapsedLists.filter(id => id !== listID))
    } else {
      setCollapsedLists(
        [...collapsedLists, listID]
      )
    }
  }

  function copyList(listId) {
    const updatedBoards = boards.map(board => {
      if (board.id === activeBoardId) {
        const listToCopy = board.lists.find(list => list.id === listId)
        if (!listToCopy) return board

        const copiedCards = listToCopy.cards.map(card => ({
          id: Date.now() + Math.random(),
          title: card.title
        }))

        const newList = {
          id: Date.now(),
          name: listToCopy.name + " (copy)",
          cards: copiedCards,
          color: listToCopy.color
        }

        return {
          ...board,
          lists: [...board.lists, newList]
        }
      }
      return board
    })

    setBoards(updatedBoards)
    setOpenMenuID(null)
  }

  function updateColorChange(listId, newColor) {
    const updatedBoards = boards.map(board => {
      if (board.id === activeBoardId) {
        const updatedLists = board.lists.map(list => {
          if (list.id === listId) {
            return {
              ...list,
              color: newColor
            }
          }
          return list
        })

        return {
          ...board,
          lists: updatedLists
        }
      }
      return board
    })

    setBoards(updatedBoards)
  }

  function addCardToList(listId, cardTitle) {
    const updatedBoards = boards.map(board => {
      if (board.id === activeBoardId) {
        const updatedLists = board.lists.map(list => {
          if (list.id === listId) {
            const newCard = {
              id: Date.now(),
              title: cardTitle,
              completed: false,
            }
            return {
              ...list,
              cards: [...list.cards, newCard]
            }
          }
          return list
        })
        return {
          ...board,
          lists: updatedLists
        }
      }
      return board
    })
    setBoards(updatedBoards)
  }


  function moveListRight(listId) {
    const updatedBoards = boards.map(board => {
      if (board.id === activeBoardId) {
        const currentIndex = board.lists.findIndex(list => list.id === listId)
        if (currentIndex === -1 || currentIndex === board.lists.length - 1) {
          return board
        }
        const updatedLists = [...board.lists]
        const listToMove = updatedLists.splice(currentIndex, 1)[0]
        updatedLists.splice(currentIndex + 1, 0, listToMove)
        return {
          ...board,
          lists: updatedLists
        }
      }
      return board
    })
    setBoards(updatedBoards)
    setOpenMenuID(null)
  }

  function deleteList(listID) {
    const updatedBoards = boards.map(board => {
      if (board.id === activeBoardId) {
        const filteredLists = board.lists.filter(list => list.id !== listID)

        return { ...board, lists: filteredLists }
      }
      return board
    })

    setBoards(updatedBoards)
  }

  function toggleComplete(cardID) {
    if (completedCardIDs.includes(cardID)) {
      setCompletedCardIDs(completedCardIDs.filter(id => id !== cardID))
    } else {
      setCompletedCardIDs([...completedCardIDs, cardID])
    }
  }

  function moveAllCards(sourceListId, destinationListId) {
    if (sourceListId === destinationListId) return

    const updatedBoards = boards.map(board => {
      if (board.id === activeBoardId) {
        const sourceList = board.lists.find(list => list.id === sourceListId)
        const destinationList = board.lists.find(list => list.id === destinationListId)
        if (!sourceList || !destinationList) return board

        const updatedLists = board.lists.map(list => {
          if (list.id === sourceListId) {
            return { ...list, cards: [] }
          }
          if (list.id === destinationListId) {
            return {
              ...list,
              cards: [...list.cards, ...sourceList.cards]
            }
          }
          return list
        })
        return {
          ...board,
          lists: updatedLists
        }
      }
      return board
    })
    setBoards(updatedBoards)
    setOpenMenuID(null)
  }

  return (
    <div className='entire-screen'>
      <div className='navigations'>
        <div className='left-navigation'>
          <span className='title'>My trello board</span>
          <select onChange={(e) => { switchBoards(Number(e.target.value)) }} value={activeBoardId} className='select' >
            {boards.map(board => (
              <option key={board.id} value={board.id}> {board.name} </option>
            ))}
          </select>
          <button className='views-btn' onClick={() => setOpenViews(true)}>Views</button>
          {openViews && <Views onClose={closeViews} boards={boards} turnBoardView={turnBoardView} setCurrentView={setCurrentView} />}
        </div>

        <div className='rigt-navigation'>
          <HiDotsHorizontal
          size={20}
            className='hamburger-icon'
            onClick={toggleHamburgerMenu}
          />
          <CgProfile className='Icon' size={20} onClick={() => { setOpenProfile(true) }} />
          {openProfile && <Profile onClose={closeProfile} />}
          <MdFilterList className='Icon' size={20} onClick={() => { setOpenFilterPannel(true) }} />

          {openFilterPannel && <FilterPannel onClose={closeOpenFilter} completedCardIDs={completedCardIDs} setCompletedCardIDs={setCompletedCardIDs} markedComplete={markedComplete} setMarkedComplete={setMarkedComplete} notMarkedComplete={notMarkedComplete} setNotMarkedComplete={setNotMarkedComplete} />}

          {isStarred ? (
            <FaStar
              size={20}
              className='Icon'
              onClick={toggleStarOff}
            />
          ) : (
            <FaRegStar
              size={20}
              className='Icon'
              onClick={toggleStarOff}
            />
          )}
          <MdLockOutline className='Icon' size={20} onClick={() => { setOpenLock(true) }} />
          {openLock && <Access onClose={closeLock} />}
          <HiDotsHorizontal className='Icon-more' size={20} onClick={() => { setOpenMenuSettings(true) }} />
          {openMenuSettings && <MenuSettings onClose={closeMenuSettings} onSelect={onSelectBackground} />}
        </div>

        {openHamburgerMenu && (
          <div className='mobile-menu'>
            <div className='mobile-div' onClick={() => { setOpenProfile(true) }}><CgProfile className='mobile-menu-item' size={20}  /> <span>Profile</span></div>
            
            {openProfile && <Profile onClose={closeProfile} />}

            <div className='mobile-div' onClick={() => { setOpenFilterPannel(true) }}><MdFilterList className='mobile-menu-item' size={20}  /> <span>Filter</span> </div>

            {openFilterPannel && <FilterPannel onClose={closeOpenFilter} completedCardIDs={completedCardIDs} setCompletedCardIDs={setCompletedCardIDs} markedComplete={markedComplete} setMarkedComplete={setMarkedComplete} notMarkedComplete={notMarkedComplete} setNotMarkedComplete={setNotMarkedComplete} />}

            {isStarred ? (
              <div className='mobile-div' onClick={toggleStarOff}><FaStar
                size={20}
                className='mobile-menu-item'
                
              />
              <span>Rate</span></div>
            ) : (
              <div className='mobile-div' onClick={toggleStarOff}><FaRegStar
                size={20}
                className='mobile-menu-item'
                
              /> <span>Rate</span> </div>
            )}
            <div className='mobile-div' onClick={() => { setOpenLock(true) }}><MdLockOutline className='mobile-menu-item' size={20}  /> <span>Access</span> </div>
            {openLock && <Access onClose={closeLock} />}
            <div className='mobile-div' onClick={() => { setOpenMenuSettings(true) }}><HiDotsHorizontal className='mobile-menu-item' size={20}  /> <span>More</span> </div>
            {openMenuSettings && <MenuSettings onClose={closeMenuSettings} onSelect={onSelectBackground} />}

          </div>
        )}

      </div>

      <div className='board-body'>
        <SortableContext items={filteredLists.map(list => list.id)} strategy={horizontalListSortingStrategy} >
          {currentView === "Board" ?

            filteredLists.map((list) => {

              const isCollapsed = collapsedLists.includes(list.id)

              return (
                <div key={list.id} className='list-card' style={{ backgroundColor: list.color || "#111214", }}>
                  {(markedComplete || notMarkedComplete) && (
                    <span className='completed-count'>
                      {list.cards.filter(c => completedCardIDs.includes(c.id)).length} completed
                    </span>
                  )}
                  <div className='header-section'>

                    <span className='card-name'>{list.name}</span>
                    <div className='card-icons'>
                      <span className='card-in-icons'>{list.cards.length}</span>
                      <VscCollapseAll className='card-in-icons' size={20} onClick={() => { listToCollapse(list.id) }} />
                      <HiDotsHorizontal className='card-in-icons' size={20} onClick={() => setOpenMenuID(list.id)} />
                    </div>
                    {openMenuID === list.id && <MenuForm onClose={closeMenu} listID={list.id} onColorChange={updateColorChange} onCopyList={copyList} onMoveList={moveListRight} onMoveAllCards={moveAllCards}
                      boards={boards} activeBoardId={activeBoardId} onDelete={deleteList} />}
                  </div>
                  {!isCollapsed && <>
                    <div className='todo-container'>
                      {list.cards.map(card => (
                        <div className='todo' key={card.id}>

                          <div className='inner-todo'>
                            <input
                              type='checkbox'
                              checked={completedCardIDs.includes(card.id)}
                              onChange={() => toggleComplete(card.id)}
                              onClick={(e) => e.stopPropagation()}
                              className='todo-checkbox'
                            />
                            <p key={card.id} className='todo-item'>{card.title}</p>
                          </div>

                          <div> <MdEdit size={20} key={card.id} className='edit-btn' onClick={() => { setOpenEditID(card.id) }} />
                            {openEditID === card.id && <Edit onClose={closeEdit} onSave={updateCard} onDelete={deleteCard} card={card} />}</div>

                        </div>
                      ))}
                    </div>

                    <div className='lower-section'>
                      {activeListId !== list.id && (
                        <button
                          className='add-todo-btn'
                          onClick={() => setActiveListId(list.id)}
                        >
                          + Add a card
                        </button>
                      )}
                      {activeListId === list.id && <CardAddition onClose={closeCardForm} onAdd={(cardTitle) => addCardToList(list.id, cardTitle)} />}
                    </div>
                  </>}
                </div>
              )
            })
            : <Table currentLists={currentLists} boards={boards} turnBoardView={turnBoardView} />}
        </SortableContext>

        {currentView === "Board" && (
          <div>
            <button className='add-list-btn' onClick={() => setAddList(true)}>
              + Add another list
            </button>
            {addList && <ListForm onClose={closeList} boards={boards} setBoards={setBoards} activeBoardId={activeBoardId} />}
          </div>
        )}
      </div>
    </div>
  )
}