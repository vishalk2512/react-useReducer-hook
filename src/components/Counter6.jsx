import { useReducer } from 'react'

const countReducer = (state, action) => {
  return {
    ...state,
    ...(typeof action === 'function' ? action(state) : action),
  }
}

const Counter6 = () => {
  const [state, setCount] = useReducer(countReducer, { count: 0 })
  const { count } = state

  const handleClick = () => {
    setCount((currState) => ({ count: currState.count + 1 }))
  }

  return <button onClick={handleClick}>{count}</button>
}
export default Counter6
