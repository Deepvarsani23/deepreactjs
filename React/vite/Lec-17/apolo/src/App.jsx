import './App.css'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Blog from './Pages/Blog'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import Error404 from './Pages/Error404'
import { BrowserRouter , Routes , Route } from 'react-router-dom'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/*" element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
