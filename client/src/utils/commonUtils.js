import Home from "../PortfolioContainer/Home/Home";
import AboutMe from "../PortfolioContainer/AboutMe/AboutMe";
import Resume from '../PortfolioContainer/Resume/Resume'
import Projects from "../PortfolioContainer/Projects/Projects";
import ContactMe from "../PortfolioContainer/ContactMe/ContactMe";

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
    {
        screenName: 'Projetos',
        component: Projects,
    },
    {
        screenName: 'Contato',
        component: ContactMe,
    },
]

export const GETSCREENINDEX = (screenName) => {
    if (!screenName) return -1
    for (let i = 0; i < TOTALSCREENS.length; i++) {
        if (TOTALSCREENS[i].screenName === screenName) return i
    }
    return -1
}