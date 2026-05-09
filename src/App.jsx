import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './All Files/Header/Header'

function App() {
  return (
    
    <div>
     

      <BrowserRouter>

      <Routes>

        <Route path={'/'} exact={true}    element={<Header/>}                 />



      </Routes>
      
      
      
      
      </BrowserRouter>





    </div>
  )
}

export default App