import React, { useState } from 'react'

export default function State() {

    const darkstyle = {
        height : '60px',
        color : 'white',
        backgroundColor : 'black',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    }

    const whitestyle = {
        height : '60px',
        color : 'black',
        backgroundColor : 'white',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    }
    
    const [style, setStyle] = useState (darkstyle)

    const Changetheme = () =>{
         if(style.color === 'white'){
            setStyle(whitestyle)
         }else{
            setStyle(darkstyle)
         }
    }

  return (
    <>
        <h1 style={{color : 'crimson'}}>Task-a</h1>
        <div>
            <button onClick={Changetheme} >Dark / Light</button>
        </div>
        <div style={style}>
            UseState
        </div>
    </>
  )
}
