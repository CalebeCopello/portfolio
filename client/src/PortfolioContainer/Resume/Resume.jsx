import React, { useState } from 'react'
import ScreenHeading from '../../utils/ScreenHeading/ScreenHeading'
import ScrollService from '../../utils/ScrollService'
import Animations from '../../utils/Animations'

const Resume = (props) => {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({})

    const resumeHeading = (props) => {
        <div className="resume-heading">
            <div className="resume-main-heading">
                <div className="heading-bullet">
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
        </div>
    }

    const fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id) return
        Animations.animations.fadeInScreen(props.id)
    }
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    return (
        <>
        <div className="resume-container screen-container" id={props.id || ''}>
            <div className="resume-content">
                <ScreenHeading title={'Currículo'} subHeading={'Minhas informações'} />
            </div>
        </div>
        </>
    )
}

export default Resume