import React from 'react'

const Header = () => {
  return (
    <div style={{display : 'flex',alignItems : 'center', justifyContent : 'space-around', width : '1500px', height : '70px', fontSize : '25px',backgroundColor : 'lightblue'}}>
      <div style={{width : '40%', color : '#1034a6'}}>
        <h1>Chapter-3</h1>
      </div>
      <div style={{display : 'flex', justifyContent : 'space-evenly', width : '60%'}}>
        <a href='/Tasks' style={{ textDecoration : 'none'}}>Tasks</a>
        <a href='/Project' style={{ textDecoration : 'none'}}>Project</a>
      </div>
    </div>
  )
}

export default Header;