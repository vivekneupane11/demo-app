import { useState } from "react"

export default function Counter() {
    const [count,setCount] = useState(0)
    const increaseNumber = ()=>{
        setCount(init=>init+1)
    }
  return (
    <>
    <h2>Count: {count}</h2>
    <button onClick={increaseNumber}>Increase</button>
    </>
  )
}
