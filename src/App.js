
import { useEffect, useState } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router';
import { ProfilePage } from './pages/ProfilePage';
import { DndContext, closestCorners } from '@dnd-kit/core'
function App() {

  const defaultBoards=[{
    id: 1,
      name: "My Trello Board",
      lists: [
        {
          id: 2,
          name: "next week",
          cards: [],
          color: " rgb(14, 17, 26)"
        }
      ]
  }]

  const [boardBackground, setBoardBackground] = useState(()=>{
    const saved = localStorage.getItem("boardsBackground")
    return saved || "linear-gradient(to top, rgb(151, 109, 151), rgb(121, 48, 121))"
  })
  const [boards, setBoards] = useState(()=>{
    const saved = localStorage.getItem("boards")
    return saved? JSON.parse(saved) : defaultBoards
  })

  const [activeBoardId, setActiveBoardId] = useState(()=>{
    const saved = localStorage.getItem("activeBoardID")
    return saved? JSON.parse(saved) : 1
  })

  useEffect(()=>{
    localStorage.setItem("boards", JSON.stringify(boards))
  }, [boards])

  useEffect(()=>{
    localStorage.setItem("activeBoardID", JSON.stringify(activeBoardId))
  }, [activeBoardId])

  useEffect(()=>{
    localStorage.setItem("boardsBackground", boardBackground)
  }, [boardBackground])

  const [search, setSearch] = useState("")

  const activeBoard = boards.find(board => board.id === activeBoardId)
  const currentLists = activeBoard ? activeBoard.lists : []

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  const filteredLists = currentLists.filter((list) => {
    if (search === "")
      return true
    return list.name.toLowerCase().includes(search.toLowerCase())

  })

  function changeBackground(newBackground) {
    setBoardBackground(newBackground)
  }

  function createBoard(boardName) {
    const newBoard = {
      id: Date.now(),
      name: boardName || "Untitled Board",
      lists: []
    }
    setBoards([...boards, newBoard])
    setActiveBoardId(newBoard.id)
  }

  return (
    <div className="App">
      <div> <NavBar createBoard={createBoard} handleSearch={handleSearch} search={search} /> </div>
      <div className='app-body' style={{ background: boardBackground }}>

        <DndContext collisionDetection={closestCorners} >
          <Routes>
            <Route path='/' element={<Home onSelectBackground={changeBackground} activeBoardId={activeBoardId} boards={boards} setBoards={setBoards} setActiveBoardId={setActiveBoardId} activeBoard={activeBoard} currentLists={currentLists} filteredLists={filteredLists} />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Routes>
        </DndContext>
      </div>
    </div>
  );
}

export default App;
