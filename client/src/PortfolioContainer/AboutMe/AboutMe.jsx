import {useEffect} from 'react'
import ScreenHeading from '../../utils/ScreenHeading/ScreenHeading'
import ScrollService from '../../utils/ScrollService'
import Animations from '../../utils/Animations'

const AboutMe = (props) => {
    return (
        <>
        <div className="about-me-container screen-container">
            <div className="about-me-parent">
                <ScreenHeading title={'Sobre Mim'} subHeading={'Por que me escolher?'} />
            </div>
        </div>
        </>
    )
}

export default AboutMe