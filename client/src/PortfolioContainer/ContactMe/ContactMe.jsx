import React, { useState } from 'react'
import Typed from 'typed.js'
import { FaRegPaperPlane } from "react-icons/fa";
import ScreenHeading from '../../utils/ScreenHeading/ScreenHeading'
import ScrollService from '../../utils/ScrollService'
import Animations from '../../utils/Animations'
import './ContactMe.css'

const ContactMe = (props) => {

    const el = React.useRef(null)

    React.useEffect(() => {
        const typed = new Typed(el.current, {
        strings: [
            'Mande um e-mail &#128232;', 
            'Entre em contato &#128231;', 
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

    const fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id) return
        Animations.animations.fadeInScreen(props.id)
    }
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [banner, setBanner] = useState('')
    const [bool, setBool] = useState(false)

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    return (
        <>
        <div className="contact-container" id={props.id || ''}></div>
        <ScreenHeading title={'Contato'} subHeading={'Entre em contato'} />
        <h2 className='contact-typed'>
            <span ref={el} className='typejs-profile'/>
        </h2>
        <div className="back-form">
            <h4>Entre em contato por aqui!</h4>
            <form action="">
                {/* <p>{banner}</p> */}
                <label htmlFor="name" value={name} onChange={handleName}>Nome:</label>
                <input type="text" placeholder='Coloque seu nome aqui'/>
                <label htmlFor="email" value={email} onChange={handleEmail}>E-mail:</label>
                <input type="email" placeholder='Coloque seu e-mail aqui'/>
                <label htmlFor="message">Mensagem:</label>
                <textarea name="text" rows="4" cols="50" value={message} onChange={handleMessage} placeholder='Escreva sua mensagem aqui'/>
                <div className="send-btn-container">
                <button className="send-btn btn">
                    Enviar <FaRegPaperPlane />
                </button>
                </div>
            </form>
        </div>
        </>
    )
}

export default ContactMe