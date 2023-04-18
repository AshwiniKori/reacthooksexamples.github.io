import React from 'react'
import {useRef} from 'react'

const Refexp3 = () => {
    const inputValue = useRef();

    const focusInput = () => {
        inputValue.current.focus();
    };
  return (
    <div>
       <input type="text" ref={inputValue}></input>
       <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default Refexp3