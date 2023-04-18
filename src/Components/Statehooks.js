import React from 'react'
import { useState } from 'react'

const Statehooks = () => {
    const [counter, setCounter] = useState(0);
  return (
    <div>
        <button onClick={()=> {setCounter(counter + 1)}}>ADD</button>
        <button onClick={()=> {setCounter(counter - 1)}}>SUB</button>
        <h1>{counter}</h1>
    </div>
  )
}

export default Statehooks