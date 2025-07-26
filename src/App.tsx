// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { Outlet } from 'react-router'
import Navbar from './components/ReusableComponents/navbar/Navbar'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Navbar />

      <Outlet />
      <Footer/>
    </div>
  )
}

export default App
