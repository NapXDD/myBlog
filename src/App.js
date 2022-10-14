import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import BlogPage from './pages/BlogPage/BlogPage'
import ContactPage from './pages/ContactPage/ContactPage'
import SlapKyarunPage from './pages/SlapKyarunPage/SlapKyarunPage'
import SideBar from './components/SideBar/SideBar'
import app from './App.css'

function App() {
  return (
      <div>
        <SideBar/>

        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/ContactPage' element={<ContactPage/>} />
          <Route path='/SlapKyarunPage' element={<SlapKyarunPage/>} />
          <Route path='/BlogPage' element={<BlogPage/>} />
        </Routes> 
      </div>
  );
}

export default App;
