import { useState } from "react"

function App() {
  let[counter,setCounter]= useState(0);

  const handelClick = () =>{
    if (counter === 20) {
      // Do something when the counter reaches 20, maybe update state or perform an action
      console.log("Counter is 20!");
    } else {
      // Increment the counter and update the state
      setCounter(counter + 1);
    }
  }
  return (
    <>
      <h1>Inc</h1>
      <button onClick={handelClick}>Inc</button>
      <span>{counter}</span>
    </>
  )
}

export default App
