import { useState } from 'react'

import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1 className='text-2xl text-center font-normal bg-red-400 '>Learn Redux react </h1>
   <AddTodo/>
   <Todos/>
    </>
  )
}

export default App
