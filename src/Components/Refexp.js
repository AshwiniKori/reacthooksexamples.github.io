import React from 'react'
import {useRef} from 'react'

const Refexp = () => {
    let inputRef = useRef(null);
    function controlInput() {
        inputRef.current.value = "abc";
        inputRef.current.style.color = "red"
        inputRef.current.style.backgroundColor = "yellow"
        // inputRef.current.style.display = "none"
        // inputRef.current.focus()
    }
  return (
    <div>
        <input type="text" ref={inputRef} />
        <button onClick={controlInput}>Handle Input</button>
    </div>
  )
}

export default Refexp