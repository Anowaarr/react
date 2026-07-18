import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Home />
    </>
  )
}

export default App
