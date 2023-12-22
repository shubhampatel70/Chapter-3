import React, { useReducer } from 'react'

function reducer (state, action){
    switch (action.type) {
        case 'increment':
            return { count : state.count + 1}
        case 'decrement':
            return { count : state.count - 1}
        case 'reset':
            return { count : 0}
        default:
            return state
    }
}

export default function Reducer() {
    
    const [state, dispatch] = useReducer(reducer, {count: 0})

    function increment() {
        dispatch({ type : 'increment'})
    }

    function decrement() {
        dispatch({ type : 'decrement'})
    }

    function reset() {
        dispatch ({ type : 'reset'})
    }
  return (
    <>
        <h1 style={{color : 'crimson'}}>Task-d</h1>
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
        <div>
            <h3>{state.count}</h3>
        </div>
    </>
  )
}
