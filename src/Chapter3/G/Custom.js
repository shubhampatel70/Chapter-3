import React, { useRef } from 'react'
import useLocalStorage from './useLocalStorage';

export default function Custom() {

    const [comments, setComments] = useLocalStorage('messages', []);

    const inputref = useRef();

    const addcomment = () => {
      let comment = inputref.current.value;
      setComments([...comments, comment]);
    }
  return (
    <>
      <h1 style={{color : 'crimson'}}>Task-g</h1>
      <div>
        <input placeholder='comment' ref={inputref}></input>
        <button onClick={addcomment}>Add</button>
        {
          comments.map((c) => <p>{c}</p>)
        }
      </div>
    </>
  )
}
