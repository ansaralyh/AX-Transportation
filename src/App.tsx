
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import DriverForm from './pages/DriverRegistrationForm/DriverForm'

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/sign-In' element={<SignIn/>}/>
      <Route path='/driver-form' element={<DriverForm/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
