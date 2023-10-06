import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import Typed from 'typed.js'
import './Profile.css'

const Profile = () => {
  // Create reference to store the DOM element containing the animation
    const el = React.useRef(null)

    React.useEffect(() => {
        const typed = new Typed(el.current, {
        strings: [
            'Desenvolvedor entusiasta &#128187;', 
            'Estudante de ADS &#128640;',
            'Aprendiz MERN Stack &#127760;',
            '<i>"Live long and prosper"</i> &#128406;',
        ],
        typeSpeed: 75,
        startDelay: 1000,
        backSpeed: 75,
        loop: true,
        loopCount: Infinity,
        backDelay: 1000,
        smartBackspace: true,
        showCursor: true,
    })

    return () => {
      // Destroy Typed instance during cleanup to stop animation
        typed.destroy()
    }
    }, [])


    return (
        <>
            <div className='profile-container'>
                <div className="profile-parent">
                    <div className="profile-details">
                        <div className="colz">
                            <div className="colz-icons">
                                <a href='https://github.com/CalebeCopello' rel='noreferrer' target='_blank' className='profile-social-icons'><FaGithub /></a>
                                <a href='https://www.linkedin.com/in/calebe-copello-59b588263/' rel='noreferrer' target='_blank' className='profile-social-icons'><FaLinkedin /></a>
                            </div>
                        </div>
                        <div className="profile-details-name">
                            <span className="primary-text">
                                Olá, eu sou <span className="highlighted-text">Calebe</span>
                            </span>
                        </div>
                        <div className="profile-details-role">
                            <span className="primary-text">
                                <h1>
                                    <span ref={el} className='typejs-profile'/>
                                </h1>
                            </span>
                            <span className="profile-role-tagline primary-text">
                                Procurando desafios como Desenvolvedor.
                            </span>
                        </div>
                        <div className="profile-options">
                            <button className="standard-btn btn">
                                Me contrate
                            </button>
                            <a href="./calebeCopello.pdf" download='Calebe Copello.pdf'>
                                <button className="highlighted-btn btn">Baixar CV</button>
                            </a>
                        </div>
                    </div>
                    <div className="profile-picture">
                        <div className="profile-picture-background">
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-footer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,96L80,90.7C160,85,320,75,480,74.7C640,75,800,85,960,90.7C1120,96,1280,96,1360,96L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            </div>
        </>
    )
}

export default Profile