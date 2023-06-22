import { useReducer } from 'react'

const countReducer = (count, step) => count + step

const Counter1 = () => {
  const [count, setCount] = useReducer(countReducer, 0)

  const handleClick = () => {
    setCount(1)
  }

  return <button onClick={handleClick}>{count}</button>
}
export default Counter1
