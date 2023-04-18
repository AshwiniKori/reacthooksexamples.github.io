import React from 'react'
import { useState, useEffect } from 'react'

const Useffecthook = () => {

    const [count, setCount] = useState(0);
    const [data, setData] = useState("");

    useEffect(() => {
        console.count("Useeffect runs");
        document.title= `You clicked ${count} of times`;
    },[count])

    const handleChange = (e) => {
        setData(e.target.value);
        console.log(data);
    }
  return (
    <div>
       <h1>{count}</h1>
       <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

       <input type="text" onChange={handleChange}></input>
    </div>
  )
}

export default Useffecthook;