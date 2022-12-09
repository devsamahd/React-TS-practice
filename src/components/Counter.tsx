import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState<number>(0)
    const add = () => {
        setCount(prev=> prev+1)
    }
    const subtract = ()=> {
        setCount(prev => prev-1)
    }
  return (
    <>
        <div>{count}</div>
        <button onClick={add}>+</button> <button onClick={subtract}>-</button>
    </>
  )
}

export default Counter