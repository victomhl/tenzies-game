import React, { useState, useEffect } from "react"
import Confetti from "react-confetti"

import Die from "../components/Die"
import useTenzies from "../components/useTenzies"

function App() {

  const {diceValues, isGameOver, count, rollDice, heldDie} = useTenzies()

  return (
    <div className="game-board">

      <div className="game--header">
        <h2 className="game--title">Tenzies</h2>
        <p className="game--text">
          Roll until all dice are the same. Click each die to freeze it at its current value
          between rolls.
        </p>
      </div>

      <div className="dice--container">
        {diceValues.map(die => <Die key={die.id} {...die} toggleDie={heldDie}/>)}
      </div>

      {isGameOver && (<div className="roll-counter">Number of Roll: {count}</div>)}

      <button className="game--button" onClick={rollDice}>
        {isGameOver ? "Play Again" : "Roll"}
      </button>

      {isGameOver && <Confetti />}
    </div>
  )
}

export default App
