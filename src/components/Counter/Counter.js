import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const handleIncreaseCounter = () => {
    setCounter(prevState => prevState + 1)
  }

  const handleResetCounter = () => {
    setCounter(0)
  }

  return (
    <div style={{paddingTop: '15px', paddingLeft: '15px'}}>
      <button type="button" onClick={handleIncreaseCounter} data-testid="counter-increase">
        Increase counter
      </button>
      <button type="button" onClick={handleResetCounter} data-testid="counter-reset">
        Reset counter
      </button>
      {counter > 0 && <h3 data-testid="counter" >Counter: {counter}</h3>}
    </div>
  )
}

export default Counter