import Home from "../PortfolioContainer/Home/Home";
import AboutMe from "../PortfolioContainer/AboutMe/AboutMe";
import Resume from '../PortfolioContainer/Resume/Resume'

export const TOTALSCREENS = [
    {
        screenName: 'Home',
        component: Home,
    },
    {
        screenName: 'Sobre Mim',
        component: AboutMe,
    },
    {
        screenName: 'Currículo',
        component: Resume,
    },
]

export const GETSCREENINDEX = (screenName) => {
    if (!screenName) return -1
    for (let i = 0; i < TOTALSCREENS.length; i++) {
        if (TOTALSCREENS[i].screenName === screenName) return i
    }
    return -1
}