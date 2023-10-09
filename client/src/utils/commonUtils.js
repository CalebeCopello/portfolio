import Home from "../PortfolioContainer/Home/Home";
import AboutMe from "../PortfolioContainer/AboutMe/AboutMe";

export const TOTALSCREENS = [
    {
        screenName: 'Home',
        component: Home,
    },
    {
        screenName: 'Sobre Mim',
        component: AboutMe,
    },
]

export const GETSCREENINDEX = (screenName) => {
    if (!screenName) return -1
    for (let i = 0; i < TOTALSCREENS.length; i++) {
        if (TOTALSCREENS[i].screenName === screenName) return i
    }
    return -1
}