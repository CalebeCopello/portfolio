import {useEffect} from 'react'
import ScreenHeading from '../../utils/ScreenHeading/ScreenHeading'
import ScrollService from '../../utils/ScrollService'
import Animations from '../../utils/Animations'
import Buttons from '../../utils/Buttons/Buttons'
import './AboutMe.css'

const AboutMe = (props) => {
    const fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return
        Animations.animations.fadeInScreen(props.id)
    }
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const ABOUTME = {
        description: 'Sou Calebe Soares Copello, apaixonado por tecnologia, ficção científica e jogos. Graduado em Letras Português/Inglês, com mestrado em Linguística, agora explorando Análise e Desenvolvimento de Sistemas. Professor por cinco anos, atualmente foco em JavaScript, ReactJS e NodeJS. Acredito em uma abordagem guiada pela curiosidade incansável, unida à dedicação à pesquisa em busca de soluções para problemas.',
        highlights: {
            heading: "Aqui temos alguns destaques:",
            bullets:[
                "Graduado em Letras Português/Inglês, mestre em Linguística e estudande de Tecnologia.",
                "Especializando-se em JavaScript, ReactJS e NodeJS",
                "Projetos notáveis incluem um eCommerce e um jogo de adivinhação de Pokémon.",
                "Habilidades distintivas: curiosidade, vontade de aprender e intransigência diante de desafios.",
                "Um ótima capacidade comunicativa, tanto para ouvir quanto para explicar",
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
        <div className="about-me-container screen-container fade-in" id={props.id || ''}>
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