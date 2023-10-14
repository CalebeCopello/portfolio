import React from 'react'
import './Buttons.css'
import ScrollService from '../ScrollService'

const Buttons = () => {
    return (
        <>
            <button className="standard-btn btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                Me contrate
            </button>
            <a href="./calebeCopello.pdf" download='Calebe Copello.pdf'>
                <button className="highlighted-btn btn">Baixar CV</button>
            </a>
        </>
    )
}

export default Buttons