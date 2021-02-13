import React, { useState } from 'react'

const Name = () => {
  const [name, setName] = useState('')

  const handleChangeName = (event) => {
    setName(event.target.value)
  }

  return (
    <div style={{marginBottom: '50px'}}>
      <input 
        type="text"
        value={name}
        onChange={handleChangeName}
        placeholder="Write your name here"
        data-testid="name-input"
      />
      {name !== '' && <h3 data-testid="name">Hello, {name}</h3>}
    </div>
  )
}

export default Name