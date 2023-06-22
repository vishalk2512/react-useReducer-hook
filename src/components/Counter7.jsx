import { useReducer } from 'react'

// const countReducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT': {
//       return { ...state, count: state.count + action.step }
//     }
//     default: {
//       throw new Error(`Unsupported action type: ${action.type}`)
//     }
//   }
// }

const countReducer = (state, action) => {
  const { count } = state
  const { type, step } = action

  switch (type) {
    case 'INCREMENT': {
      return { ...state, count: count + step }
    }
    default: {
      throw new Error(`Unsupported action type: ${type}`)
    }
  }
}

const Counter7 = () => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 })
  const { count } = state

  const handleClick = () => {
    dispatch({ type: 'INCREMENT', step: 1 })
  }

  return <button onClick={handleClick}>{count}</button>
}
export default Counter7
