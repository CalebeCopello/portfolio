import {useEffect} from 'react'
import ScreenHeading from '../../utils/ScreenHeading/ScreenHeading'
import ScrollService from '../../utils/ScrollService'
import Animations from '../../utils/Animations'
import Buttons from '../../utils/Buttons/Buttons'
import './AboutMe.css'

const AboutMe = (props) => {
    const fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id) return
        Animations.animations.fadeInScreen(props.id)
    }
    // const fadeInSubscription = 
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const ABOUTME = {
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi id officia consequatur earum cum nam delectus adipisci, ad assumenda accusamus officiis eligendi dignissimos rerum consequuntur qui animi possimus minus consectetur.',
        highlights: {
            heading: "Aqui temos alguns destaques:",
            bullets:[
                "Bullet 1",
                "Bullet 2",
                "Bullet 3",
                "Bullet 4",
                "Bullet 5",
            ]
        }
    }

    const renderHighlights = () =>{
        return(
            ABOUTME.highlights.bullets.map((v, i) => (
                <div className="highlight" key={i}>
                    <div className="highlight-rect"></div>
                    <span>{v}</span>
                </div>
            ))
        )
    }

    return (
        <>
        <div className="about-me-container screen-container" id={props.id || ''}>
            <div className="about-me-parent">
                <ScreenHeading title={'Sobre Mim'} subHeading={'Por que me escolher?'} />
                <div className="about-me-card">
                    <div className="about-me-profile">
                    </div>
                    <div className="about-me-details">
                        <span className="about-me-description">
                            {ABOUTME.description}
                        </span>
                        <div className="about-me-highlights">
                            <div className="highlight-heading">
                                <span>{ABOUTME.highlights.heading}</span>
                            </div>
                            {renderHighlights()}
                        </div>
                        <div className="about-me-options">
                            <Buttons />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutMe