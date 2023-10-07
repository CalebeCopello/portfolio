import { TOTALSCREENS } from './commonUtils'
import {Subject} from 'rxjs'


export default class ScrollService {
    static scrollHandler = new ScrollService()
    static currentScreenBroadCaster = new Subject()
    static currentScreenFadeIn = new Subject()

    constructor() {
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport)
    }
    scrollToHireMe = () => {
        let contactMeScreen = document.getElementById('contactMe')
        if (!contactMeScreen) return
        contactMeScreen.scrollIntoView({behavior: 'smooth'})
    }
    scrollToHome = () => {
        let homeScreen = document.getElementById('Home')
        if (!homeScreen) return
        homeScreen.scrollIntoView({behavior: 'smooth'})
    }
    isElementInView = (e, t) => {
        let rec = e.getBoundingClientRect()
        let elementTop = rec.top
        let elementBottom = rec.bottom

        let partiallyVisible = elementTop < window.innerHeight && elementBottom >= 0
        let completelyVisible = elementTop >= 0 && elementBottom <= window.innerHeight

        switch(t){
            case  'partial':
                return partiallyVisible
            case 'complete':
                return completelyVisible
            default:
                return false
        }
    }
    checkCurrentScreenUnderViewport = (e) => {
        if(!e || Object.keys(e).length <1) return
        for (let screen of TOTALSCREENS) {
            let screenFromDOM = document.getElementById(screen.screenName)
            if (!screenFromDOM) continue

            let fullyVisible = this.isElementInView(screenFromDOM, 'complete')
            let partiallyVisible = this.isElementInView(screenFromDOM, 'partial')

            if (fullyVisible || partiallyVisible) {
                if (partiallyVisible && !screen.alreadyRendered) {
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.screenName
                    })
                    screen['alredyRendered'] = true
                    break
                }
                if (fullyVisible) {
                    ScrollService.currentScreenBroadCaster.next({
                        screenInView: screen.screenName
                    })
                    break
                }
            }
        }
    }
}