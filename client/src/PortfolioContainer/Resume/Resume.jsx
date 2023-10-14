import React, { useState } from 'react'
import ScreenHeading from '../../utils/ScreenHeading/ScreenHeading'
import ScrollService from '../../utils/ScrollService'
import Animations from '../../utils/Animations'
import { IoSchoolOutline } from "react-icons/io5";
import {MdOutlineWorkOutline} from 'react-icons/md'
import { RiCodeSSlashFill } from "react-icons/ri";
import { SiStartrek } from "react-icons/si";
import { BiLogoJavascript, BiLogoReact, BiLogoNodejs, BiLogoMongodb, BiLogoHtml5, BiLogoCss3 } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { PiCertificateBold } from "react-icons/pi";
import './Resume.css'

const Resume = (props) => {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({})

    const fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return
        Animations.animations.fadeInScreen(props.id)
    }
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const ResumeHeading = (props) => {
        return (
        <div className="resume-heading">
            <div className="resume-main-heading">
                <div className="heading-bullet"></div>
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + ' - ' + props.toDate}
                        </div>
                    ) : (
                        <div> </div>
                    )}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : '' }</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ''}</span>
                </div>
            </div>
        )
    }

    const resumeBullets = [
        {label: 'Educação', logoScr: <IoSchoolOutline />},
        {label: 'Empregos', logoScr: <MdOutlineWorkOutline />},
        {label: 'Linguagens de Programação', logoScr: <RiCodeSSlashFill />},
        {label: 'Certificações', logoScr: <PiCertificateBold />},
        {label: 'Outros interesses', logoScr: <SiStartrek />},
    ]
    const programmingSkillDetails = [
        {skill: 'HTML', logoScr: <BiLogoHtml5 />},
        {skill: 'CSS', logoScr: <BiLogoCss3 />},
        {skill: 'JavaScript', logoScr: <BiLogoJavascript />},
        {skill: 'ReactJs', logoScr: < BiLogoReact />},
        {skill: 'Node JS', logoScr: <BiLogoNodejs />},
        {skill: 'Express JS', logoScr: <SiExpress />},
        {skill: 'Mongo DB', logoScr: <BiLogoMongodb />},
    ]
    const certificationDetails = [
        {title: 'CC50: Introdução à Ciência da Computação', url: './CalebeCopello-CS50.pdf', subHeading: 'O Curso de Harvard, no Brasil [ORIGINAL][LEGENDADO]', description: 'O curso CS50 é curso presencial e online de ciência da computação da Universidade de Harvard e, desde 2015, também da Universidade Yale.'},
        {title: 'CC50: Introdução à Ciência da Computação', url: './CalebeCopello-CS50.pdf', subHeading: 'O Curso de Harvard, no Brasil [ORIGINAL][LEGENDADO]', description: 'O curso CS50 é curso presencial e online de ciência da computação da Universidade de Harvard e, desde 2015, também da Universidade Yale.'},
        {title: 'GeekShop', url: 'https://github.com/CalebeCopello', subHeading: <> Tecnologias usadas: <BiLogoHtml5 /> <BiLogoCss3 /> <BiLogoJavascript /> </> , description: 'Geek Ecommerce'},
    ]
    const interestsDetails = [
        {heading: 'SciFi', description: 'Adoro assistir filmes/séries de ficção científica!'},
        {heading: 'SciFi', description: 'Adoro assistir filmes/séries de ficção científica!'},
    ]
    const resumeDetails = [
        <div className="resume-screen-container" key='education'>
            <ResumeHeading heading={'FURG'} subHeading={'Letras'} fromDate={'2009'} toDate={'2014'} />
            <ResumeHeading heading={'FURG'} subHeading={'Letras'} fromDate={'2009'} toDate={'2014'} />
            <ResumeHeading heading={'FURG'} subHeading={'Letras'} fromDate={'2009'} toDate={'2014'} />
        </div>,
        <div className="resume-screen-container" key='work-experience'>
            <ResumeHeading heading={'CCAA'} subHeading={'Instrutor de Idiomas'} fromDate={'2018'} toDate={'2023'} />
            <div className="experience-description">
                <span className='resume-description-text'>
                    Dei várias aula.
                </span>
            </div>
            <div className="resume-description-text">
            <span className='resume-description-text'>
                    Dei muitas.
                </span>
            </div>
            <ResumeHeading heading={'CCAA'} subHeading={'Instrutor de Idiomas'} fromDate={'2018'} toDate={'2023'} />
            <div className="experience-description">
                <span className='resume-description-text'>
                    Dei várias aula.
                </span>
            </div>
            <div className="resume-description-text">
            <span className='resume-description-text'>
                    Dei muitas.
                </span>
            </div>
        </div>,
        <div className="resume-screen-container programming-skills-container" key='programming-skills'>
            {programmingSkillDetails.map((skill,index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <div className="skill-wrapper">
                        <span className=''>{skill.skill}</span>
                        <div className="skill-logo">
                            <div>{skill.logoScr}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>,
        <div className="resume-screen-container" key='certifications'>
            {certificationDetails.map((certificationDetails, index) => (
                <div className='resume-certification-container'>
                <ResumeHeading key={index} heading={<a href={certificationDetails.url}> {certificationDetails.title} </a>} subHeading={certificationDetails.subHeading} description={certificationDetails.description} />
                </div>
            ))}
        </div>,
        <div className="resume-screen-container" key='interests'>
            {interestsDetails.map((interestsDetails, index) => (
                <ResumeHeading key={index} heading={interestsDetails.heading} description={interestsDetails.description} />
            ))}
        </div>
    ]

    const handleCarousal = (index) => {
        let offsetHeight = 360
        let newCarousalOffset = {
            style: {transform: 'translateY(' + index * offsetHeight * -1 + 'px)'},
        }
        setCarousalOffSetStyle(newCarousalOffset)
        setSelectedBulletIndex(index)
    }

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div onClick={() => handleCarousal(index)} className={index === selectedBulletIndex ? 'bullet selected-bullet' : 'bullet'} key={index}>
                <div className="bullet-logo">
                    {bullet.logoScr} 
                </div>
                    <span className="bullet-label">{bullet.label}</span>
            </div>
        ))
    }

    const getResumeScreen = () => {
        return (
            <div style={carousalOffSetStyle.style} className="resume-details-carousal">
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        )
    }

    return (
        <>
        <div className="resume-container screen-container fade-in" id={props.id || ''}>
            <div className="resume-content">
                <ScreenHeading title={'Currículo'} subHeading={'Minhas informações'} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">
                                {getBullets()}
                            </div>
                        </div>
                    </div>
                <div className="resume-bullet-details">
                    {getResumeScreen()}
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Resume