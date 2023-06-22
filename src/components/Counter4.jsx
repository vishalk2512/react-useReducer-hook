import { useReducer } from 'react'

// const countReducer = (count, action) => count + action.step
// const countReducer = (count, { step }) => count + step
const countReducer = (count, action) => {
  const { step } = action
  return count + step
}

const Counter4 = () => {
  const [count, setCount] = useReducer(countReducer, 0)

  const handleClick = () => {
    setCount({ step: 1 })
  }

  return <button onClick={handleClick}>{count}</button>
}
export default Counter4
