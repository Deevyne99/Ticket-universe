// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Hero from './components/Hero'
import Navbar from './components/ReusableComponents/navbar/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex md:w-full  flex-col   '>
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default App
