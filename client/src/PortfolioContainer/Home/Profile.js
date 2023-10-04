import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import Typed from 'typed.js'

const Profile = () => {
  // Create reference to store the DOM element containing the animation
    const el = React.useRef(null)

    React.useEffect(() => {
        const typed = new Typed(el.current, {
        strings: [
            '<i>First</i> sentence.', 
            '&amp; a second sentence. &#128512;'
        ],
        typeSpeed: 75,
        startDelay: 1000,
        backSpeed: 75,
        loop: true,
        loopCount: Infinity,
        backDelay: 1000,
        smartBackspace: true,
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
                                <a href='https://github.com/CalebeCopello' rel='noreferrer' target='_blank'><FaGithub /></a>
                                <a href='https://www.linkedin.com/in/calebe-copello-59b588263/' rel='noreferrer' target='_blank'><FaLinkedin /></a>
                            </div>
                        </div>
                        <div className="profile-details-name">
                            <span className="primary-text">
                                {" "}
                                Olá, eu sou <span className="highlighted-text">Calebe</span>
                            </span>
                        </div>
                        <div className="profile-details-role">
                            <span className="primary-text">
                                {" "}
                                <h1>
                                    <span ref={el} className='type-profile'/>
                                </h1>
                                <span className="profile-role-tagline">
                                    Procurando desafios como Desenvolvedor.
                                </span>
                            </span>
                        </div>
                        <div className="profile-options">
                            <button className="standard-btn">
                                {""}
                                Me contrate
                            </button>
                            <a href="./calebeCopello.pdf" download='Calebe Copello.pdf'>
                                <button className="highlighted-btn">Baixar CV</button>
                            </a>
                        </div>
                    </div>
                    <div className="profile-picture">
                        <div className="profile-picture background">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile