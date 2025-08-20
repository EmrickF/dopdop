'use client'
import { useState, useEffect } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const saved = localStorage.getItem('counter')
    if (saved !== null) setCount(Number(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem('counter', String(count))
  }, [count])

  return ( 
    <div>
      <h1 style={{ fontSize: "2.2rem"}}>{count}</h1>
      <button
        style={{ fontSize: "3rem", padding: "0.5rem 1.5rem", marginRight: "0.5rem" }}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <button
        style={{ fontSize: "3rem", padding: "0.5rem 1.5rem" }}
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
    </div>
  )
}