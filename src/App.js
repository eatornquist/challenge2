import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  )
}

function Counter() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)

  const date = new Date()
  date.setDate(date.getDate() + count)

  return (
    <>
      <div>
        <button onClick={() => setStep((s) => s - 1)}> - </button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}> + </button>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}> - </button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}> + </button>
      </div>

      <div>
        <h1>
          {count} days from today is {date.toDateString()}
        </h1>
      </div>
    </>
  )
}

export default App
