// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { Outlet } from 'react-router'
import Navbar from './components/ReusableComponents/navbar/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Navbar />

      <Outlet />
    </div>
  )
}

export default App
