//React and Core Components
import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Inbuilt Components
import Header from '../Header'
import Home from '../../screens/Home'
import Details from '../../screens/Details/'
import Search from '../../screens/Search/'
import Rated from '../../screens/Rated';


//Third components
import { Helmet } from 'react-helmet'

//Styles Components
import { GiPopcorn } from "react-icons/gi";
import  './App.style.sass'

function App() {
  const [count, setCount] = useState(0)

  const teste = <GiPopcorn/>

  return (
   <BrowserRouter>
    <Helmet>
      <title> Momento Pipoca</title>
      <meta name="Momento Pipoca" content= "Momento Pipoca" />
      <link rel="icon" type="image/png" href="/logo.png" sizes="16x16" />
    </Helmet>
      <div className="container container--fluid">
        <Header/>
        <main>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/movie/:moveid' element={<Details/>}/>
              <Route path='/search/:query' element={<Search/>}/>
              <Route path='/rated' element={<Rated/>}/>
            </Routes>
        </main>
      </div>
   </BrowserRouter>
  )
}

export default App
