import React, { useEffect, useState } from 'react'

export default function Effect() {
    const [resours, setResours] = useState('users')
    const [resoursList, setResoursList] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resours}`)
            .then(response => response.json())
            .then(json => setResoursList(json))
    }, [resours])
  return (
    <>
        <h1 style={{ color : 'crimson'}}>Task-b</h1>
        <div>
            <button onClick={() => setResours('users')}>Users</button>
            <button onClick={() => setResours('posts')}>Posts</button>
        </div>
        <h3>{resours}</h3>
        <div style={{width : '98vw'}}>
        {resoursList.map((resourslist) => (
         <li key={resourslist.id}>{resours==="posts"?(resourslist.title):(resourslist.username)}</li>
        ))}
        </div>

    </>
  )
}
