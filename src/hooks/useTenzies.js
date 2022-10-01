import {useState, useEffect} from "react"
import {nanoid} from "nanoid"

function useTenzies() {

    const [diceValues, setDiceValues] = useState(createDiceValueArray())
    const [isGameOver, setIsGameOver] = useState(false)
    const [count, setCount] = useState(0)
    
    // Generate a random number between 1 and 6 (inclusively)
    function getRandomNumber() {
      return Math.ceil(Math.random() * 6)
    }
  
    // Create an array with 10 elements (object type), each element will have
    // three properties: id (string), value (number), and isHeld (boolean)
    function createDiceValueArray() {
      let valueArray = []
  
      for (let i = 0; i < 10; i++) {
          valueArray.push({id: nanoid(),
                           value: getRandomNumber(),
                           isHeld: false})
      }
  
      return valueArray
    }

    // Update the value property of the dice (obj) that are not held (isHeld = false)
    // in the diceValues Array (array of object) 
    function updateDiceValues(arrayObj) {
        return arrayObj.map(die => die.isHeld ? die : {...die, value: getRandomNumber()})
    }
  
    // 
    function restartGame() {
      setIsGameOver(false)
      setDiceValues(createDiceValueArray)
      setCount(0)
    }
    
    //
    function rollDice() {
      if (!isGameOver) {
        setDiceValues(prevState => updateDiceValues(prevState))
        setCount(prevCount => prevCount + 1)
      } else {
        restartGame()
      }
    }
    
    
    function heldDie(id) {
  
      // Only toggle the      isHeld propety if the game is not over
      if (!isGameOver) {

        setDiceValues(prevState => (
          prevState.map(die => die.id === id ? {...die, isHeld: !die.isHeld} : die)
        ))
        
      }
      
    }
    
    //
    useEffect(() => {
  
      const areAllDiceHold = diceValues.every( die => die.isHeld)
      const areAllDiceSameValue = diceValues.every(die => diceValues[0].value === die.value)
  
      if (areAllDiceHold && areAllDiceSameValue) {
        setIsGameOver(true)
      }
  
    }, [diceValues])
  
    return {diceValues, isGameOver, count, rollDice, heldDie}
}

export default useTenzies