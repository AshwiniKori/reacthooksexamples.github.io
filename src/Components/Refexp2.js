import React from 'react'
import {useState, useEffect, useRef} from 'react'

const Refexp2 = () => {
    const[inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue
    },[inputValue])
  return (
    <div>
        <input type="text" onChange={(e) => setInputValue(e.target.value)} />
        <h2>Current Value:{inputValue}</h2>
        <h2>Previous Value: {previousInputValue.current}</h2>
    </div>
  )
}

export default Refexp2