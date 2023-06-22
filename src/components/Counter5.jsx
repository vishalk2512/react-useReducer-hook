import { useReducer } from 'react'

const countReducer = (state, action) => {
  return { ...state, ...action }
}

const Counter5 = () => {
  const [state, setCount] = useReducer(countReducer, { count: 0 })
  const { count } = state

  const handleClick = () => {
    setCount({ count: count + 1 })
  }

  return <button onClick={handleClick}>{count}</button>
}
export default Counter5
