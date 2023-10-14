import React from 'react'

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import ScreenHeading from '../../utils/ScreenHeading/ScreenHeading'
import ScrollService from '../../utils/ScrollService'
import Animations from '../../utils/Animations'
import './Projects.css'
import Footer from '../Home/Footer/Footer'

const Projects = (props) => {

    const fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return
        Animations.animations.fadeInScreen(props.id)
    }
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const carouselOptions = {
        nav: true,
        smartSpeed: 1000,
        margin: 30,
        responsive: {
            0:{
                items: 1
            },
            400:{
                items: 1
            },
            600:{
                items: 2
            },
            1000:{
                items: 3
            },
            1400:{
                items: 4
            },
            1800:{
                items: 5
            },
        }
    }

    return (
        <>
            <div>
                <ScreenHeading title={'Projetos'} subHeading={'Aqui estão alguns dos meus projetos'} />
                <section className="projects-section fade-in" id={props.id || ''}>
                <div className="container">
                    <div className="row">
                        <OwlCarousel className='owl-carousel' id='projects-carousel' {...carouselOptions} >
                            <div className="col-lg-12">
                                <div className="project-item">
                                    <div className="project-comment">
                                        <p>
                                            Projetinho maroto I
                                        </p>
                                    </div>
                                    <div className="project-img">
                                        <img src="/img/projects/marvel.png"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="project-item">
                                    <div className="project-comment">
                                        <p>
                                            Projetinho maroto II
                                        </p>
                                    </div>
                                    <div className="project-img">
                                        <img src="/img/projects/marvel.png"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="project-item">
                                    <div className="project-comment">
                                        <p>
                                            Projetinho maroto III
                                        </p>
                                    </div>
                                    <div className="project-img">
                                        <img src="/img/projects/marvel.png"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="project-item">
                                    <div className="project-comment">
                                        <p>
                                            Projetinho maroto IV
                                        </p>
                                    </div>
                                    <div className="project-img">
                                        <img src="/img/projects/marvel.png"/>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Projects