import Footer from './components/Footer'
import { useState } from 'react'
import './css/app.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>First Term Airman's Course</h1>
      <Footer />
    </>
  )
}

export default App