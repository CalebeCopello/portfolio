import { useState } from "react"
import {TOTALSCREENS, GETSCREENINDEX} from '../../../utils/commonUtils'
import ScrollService from '../../../utils/ScrollService'
import {RxHamburgerMenu} from 'react-icons/rx'
import {HiOutlineCodeBracketSquare} from 'react-icons/hi2'
import './Header.css'

const Header = () => {
    const [selectedScreen, setSelectedScreen] = useState(0)
    const [showHeaderOptions, setShowHeaderOptions] = useState(false)

    const updateCurrentScreen = (currentScreen) => {
        if (!currentScreen || !currentScreen.screenInView) return
        let screenIndex = GETSCREENINDEX(currentScreen.screenInView)
        if (screenIndex < 0 ) return
    }
    let currentScreenSubscription = ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen)

    const getHeaderOptions = () => {
        return(
            TOTALSCREENS.map((screen, i) => (
                <div key={screen.screenName} className={getHeaderOptionClass(i)} onClick={() => switchScreen(i, screen)}>
                    <span>{screen.screenName}</span>
                </div>
            ))
        )
    }

    const switchScreen = (i, screen) => {
        let screenComponent = document.getElementById(screen.screenName)
        if (!screenComponent) return
        screenComponent.scrollIntoView( {behavior: 'smooth'})
        setSelectedScreen(i)
        setShowHeaderOptions(false)
    }

    const getHeaderOptionClass = (i) => {
        let classes = 'header-option'
        if (i < TOTALSCREENS.length -1) classes += 'header-option-separator'
        if (selectedScreen === i) classes += 'selected-header-option'
        return
    }

    return (
        <>
        <div className="header-container" onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
            <div className="header-parent">
                <div className="header-hamburger" onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                <RxHamburgerMenu className='header-hamburger-bars' />
                </div>
            <div className="header-logo">
                <span>
                    <div className="header-dev-icon">
                        <HiOutlineCodeBracketSquare />
                    </div>
                    Copello
                </span>
            </div>
            <div className={(showHeaderOptions) ? 'header-options show-hamburger-options' : 'header-options'}>
                {getHeaderOptions()}
            </div>
            </div>
        </div>
        </>
    )
}

export default Header