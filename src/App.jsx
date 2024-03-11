import './App.css'
import {Route, Routes} from'react-router-dom'
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import News from "./Pages/News/News";
import * as React from 'react'




function App() {
 
  return (
        
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'/'} element={<Home/>}/>
            </Route>
            <Route path={'/news'} element={<News/>}/>
        </Routes>
       
      
  )

}

export default App
