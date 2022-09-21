import React from "react";
import PropTypes from "prop-types"

function Die(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF"
    }

    function checkDisplay(itemPos, value) {
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

        }

    }

    return (
        <div 
            style={styles} 
            onClick={() => props.toggleDie(props.id)}
            className="die-face">

            {/* <h3 className="die--value">{props.value}</h3> */}
            <div className={`grid-item ${checkDisplay(1, props.value)}`}></div>
            <div className="grid-item no-display"></div>
            <div className={`grid-item ${checkDisplay(3, props.value)}`}></div>
            <div className={`grid-item ${checkDisplay(4, props.value)}`}></div>
            <div className={`grid-item ${checkDisplay(5, props.value)}`}></div>
            <div className={`grid-item ${checkDisplay(6, props.value)}`}></div>
            <div className={`grid-item ${checkDisplay(7, props.value)}`}></div>
            <div className="grid-item no-display"></div>
            <div className={`grid-item ${checkDisplay(9, props.value)}`}></div>
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