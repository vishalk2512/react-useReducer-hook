import { useReducer } from 'react'

const countReducer = (count, newCount) => newCount

const Counter2 = () => {
  const [count, setCount] = useReducer(countReducer, 0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return <button onClick={handleClick}>{count}</button>
}
export default Counter2
