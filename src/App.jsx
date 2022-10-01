import React, { useState, useEffect } from "react"
import Confetti from "react-confetti"

import Die from "./components/Die"
import useTenzies from "./hooks/useTenzies"

function App() {

  const {diceValues, isGameOver, count, rollDice, heldDie} = useTenzies()

  return (
    <div className="row justify-content-center">
        <div className="game--board col-11 col-sm-9 col-md-7 d-flex flex-column justify-content-around">

            <div className="game--header my-3">
                <h2 className="game--title">Tenzies</h2>
                <p className="game--text">
                Roll until all dice are the same. Click each die to freeze it at its current value
                between rolls.
                </p>
            </div>

            <div className="dice--container mx-auto mb-3 px-2">
                {diceValues.map(die => <Die key={die.id} {...die} toggleDie={heldDie}/>)}
            </div>

            {isGameOver && (<div className="roll-counter mb-3">Number of Roll: {count}</div>)}

            <div className="mx-auto">
                <button 
                    type="button"
                    id="game--button"
                    className="btn btn-sm px-4 mb-2"
                    onClick={rollDice}>
                    {isGameOver ? "Play Again" : "Roll"}
                </button>
            </div>

            {isGameOver && <Confetti />}

        </div>
    </div>
  )
}

export default App
