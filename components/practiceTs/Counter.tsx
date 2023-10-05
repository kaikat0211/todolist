import React, { useState } from "react"

const Counter : React.FC = () => {
    const [count,setCount] = useState(0)
    const handleClick = () => {
        setCount(prev=>prev+1)
    }
    return (
    <>
        <h1>{count}</h1>
        <button onClick={handleClick}>+</button>
    </>
    )
}
export default Counter