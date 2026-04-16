import About from './pages/About'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import {Routes,Route,Link} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
       <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    
     
    
    </div>
  )
}

export default App