import React from "react"
import ChatScreen from "./ChatScreen"
import "./styles/global.css"
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="app-body">
            <Routes>
              <Route path='/' element={<ChatScreen/>}/>
              <Route path='/contact/:contact_id' element={<ChatScreen/>}/>
            </Routes>
    </div>
  )
}

export default App
