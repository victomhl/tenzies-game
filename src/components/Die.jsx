import React from "react";
import PropTypes from "prop-types"
import { func } from "prop-types";

function Die(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF"
    }

    function checkIfDisplaySymbol(itemPos, value) {
        // Grid Layout
        //    1 2 3
        //    4 5 6
        //    7 8 9

        // Position 2 and 8 are never display

        if (itemPos === 1 || itemPos === 9) {

            return value === 1 ? "no-display" : ""

        } else if (itemPos === 3 || itemPos === 7) {

            return value < 4 ? "no-display" : ""

        } else if (itemPos === 4 || itemPos === 6) {

            return value !== 6 ? "no-display" : ""

        } else if (itemPos === 5) {

            return value % 2 === 0 ? "no-display" : ""

        } else {
            return "no-display"
        }

    }

    function displayDieSymbols() {
        const symbolsArray = []

        for (let i = 1; i < 10; i++) {
            symbolsArray.push(
                <div key={i} className={`grid--item`}>
                    <div
                        className={`die--face-symbol ${checkIfDisplaySymbol(i, props.value)}`}
                    >
                    </div>
                </div>
            )
        }

        return symbolsArray
    }

    return (
        
        <div className="grid--cell">
            <div 
                style={styles} 
                onClick={() => props.toggleDie(props.id)}
                className="die--face p-1"
            >
                {displayDieSymbols()}
            </div>
        </div>
    )
}

Die.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    isHeld: PropTypes.bool.isRequired,
    toggleDie: PropTypes.func.isRequired
}

export default Die;