import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Help from './components/Help'
import Service1 from './components/Service1'
import Service2 from './components/Service2'
import Latest from './components/Latest'

import Mail from './components/Mail'
import Footer from './components/Footer'
import Copyright from './components/Copyright'
import Backtotop from './components/Backtotop'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' w-full xl:w-[80] xl:mx-auto'>
     <Navbar/>
     {/* <Blank/> */}
     <Hero/>
      <Help/>
      <Service1/>
      <Service2/>
      <Latest/>
      <Mail/>
      <Footer/>
      <Copyright/>
      <Backtotop/>
    
        
      </div>
    </>
  )
}

export default App
