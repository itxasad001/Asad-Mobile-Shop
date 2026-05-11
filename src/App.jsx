import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './All Files/Header/Header'
import AddProductDialog from './All Files/Header/AddProductDialog'

function App() {
  return (
    
    <div>
     

      <BrowserRouter>

      <Routes>

        <Route path={'/'} exact={true}    element={<Header/>}                 />

        <Route path={'/form'} element={<AddProductDialog/>} exact={true} />



      </Routes>
      
      
      
      
      </BrowserRouter>





    </div>
  )
}

export default App