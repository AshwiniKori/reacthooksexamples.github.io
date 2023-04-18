import React from 'react'
import {useState, useEffect} from 'react';

const Effecthook = () => {

  const [resources, setResources] = useState("Post");
  console.log("render");

  useEffect(() => {
    console.log("resource changed");
  })

  return (
    <div>
      <button onClick={()=> {setResources("Post")}}>Post</button>
      <button onClick={()=> {setResources("Comments")}}>Comments</button>
      <button onClick={()=> {setResources("Users")}}>Users</button>
      <h1>{resources}</h1>
    </div>
  );
}

export default Effecthook;