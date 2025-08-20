'use client'
import React, { useState, useEffect } from 'react'

export default function Gamelist() {
  const [games, setGames] = useState<string[]>([])
  const [input, setInput] = useState('')
  const [sortAlpha, setSortAlpha] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('games')
    if (saved) setGames(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem('games', JSON.stringify(games))
  }, [games])

  const AddGame = () => {
    if (input !== '') {
      setGames([...games, input])
      setInput('')
    }
  }
  let sortedGames: string[]
  if (sortAlpha) {
    sortedGames = [...games].sort((a, b) => a.localeCompare(b))
  } else {
    sortedGames = games
  }

  return (
    <div>
      <h2>Mitt favoritspel</h2>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Skriv ditt favoritspel"
        style={{ marginRight: '0.5rem', padding: '0.5rem' }}
      />
      <button onClick={AddGame} style={{ padding: '0.5rem 1rem' }}>
        Lägg till
      </button>
      <button
        onClick={() => setSortAlpha(!sortAlpha)}
        style={{ marginLeft: '0.5rem', padding: '0.5rem 1rem' }}
      >
        {sortAlpha ? 'Original ordning' : 'Sortera alfabetiskt'}
      </button>
      <ul style={{ marginTop: '1rem' }}>
        {sortedGames.map((game, idx) => (
          <li key={idx}>{game}</li>
        ))}
      </ul>
    </div>
  )
}