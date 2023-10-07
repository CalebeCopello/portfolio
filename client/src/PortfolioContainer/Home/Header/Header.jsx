import { useState } from "react"
import {TOTALSCREENS, GETSCREENINDEX} from '../../../utils/commonUtils'
import ScrollService from '../../../utils/ScrollService'
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


    return (
        <>
        </>
    )
}

export default Header