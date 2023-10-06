import Home from "../PortfolioContainer/Home/Home";

export const TOTALSCREENS = [
    {
        screenName: 'Home',
        component: Home,
    },
]

export const GETSCREENINDEX = (screenName) => {
    if (!screenName) return -1
    for (let i = 0; i < TOTALSCREENS.length; i++) {
        if (TOTALSCREENS[i].screenName === screenName) return i
    }
    return -1
}