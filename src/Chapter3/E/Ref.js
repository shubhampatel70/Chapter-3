import React, { useEffect, useRef } from 'react'

export default function Ref() {

    const focus = useRef(null);

    const handleFocus = () => {
      focus.current.focus();
    }

    useEffect (() => {
        focus.current.focus();
    })
  return (
    <>
        <h1 style={{color : 'crimson'}}>Task-e</h1>
        <input ref={focus} />
        <button onClick={handleFocus}>Focus</button>
    </>
  )
}
