import React from 'react'
import './Buttons.css'

const Buttons = () => {
    return (
        <>
            <button className="standard-btn btn">
                Me contrate
            </button>
            <a href="./calebeCopello.pdf" download='Calebe Copello.pdf'>
                <button className="highlighted-btn btn">Baixar CV</button>
            </a>
        </>
    )
}

export default Buttons