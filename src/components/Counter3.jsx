import { useReducer } from 'react'

const countReducer = (count, newCountFn) => newCountFn(count)

const Counter3 = () => {
  const [count, setCount] = useReducer(countReducer, 0)

  const handleClick = () => {
    setCount((currCount) => currCount + 1)
  }

  return <button onClick={handleClick}>{count}</button>
}
export default Counter3
