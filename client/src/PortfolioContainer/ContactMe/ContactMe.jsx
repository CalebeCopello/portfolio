import React, { useState } from 'react'
import Typed from 'typed.js'
import { FaRegPaperPlane } from "react-icons/fa";
import axios from 'axios'
import { toast } from 'react-toastify'
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
        if (screen.fadeInScreen !== props.id) return
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
    const submitForm = async (e) => {
        e.preventDefault()
        try {
            let data = {
                name,
                email,
                message,
            }
            setBool(true)
            const res = await axios.post(`/contact`, data)
            if (name.length === 0 || email.length === 0 || message.length === 0) {
                setBanner(res.data.msg)
                toast.error(res.data.msg)
                setBool(false)
            } else if (res.status === 200) {
                setBanner(res.data.msg)
                toast.success(res.data.msg)
                setBool(false)
                
                setName("");
                setEmail("");
                setMessage("");
            }
            
        } catch (err) {
            toast.error(err)
        }
    }

    return (
        <>
        <div className="contact-container fade-in" id={props.id || ''}>
            <ScreenHeading title={'Contato'} subHeading={'Entre em contato'} />
            <div className="central-form">
                <div className='contact-texts'>
                <h2 className='contact-typed'>
                    <span ref={el} className='typejs-contact'/>
                </h2>
                    <div className="contact-img">
                    <img src="/img/contact/contact.jpg" alt='imagem de email'/>
                    </div>
                </div>
                <div className="back-form">
                    <form onSubmit={submitForm}>
                        <p>{banner}</p>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" value={name} onChange={handleName} placeholder='Coloque seu nome aqui'/>
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" value={email} onChange={handleEmail} placeholder='Coloque seu e-mail aqui'/>
                        <label htmlFor="message">Mensagem:</label>
                        <textarea name="text" rows="4" cols="50" value={message} onChange={handleMessage} placeholder='Escreva sua mensagem aqui'/>
                        <div className="send-btn-container">
                        <button className="highlighted-btn btn">
                            Enviar <FaRegPaperPlane />
                        </button>
                        </div>
                    {bool ? (
                        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    ) : (
                        ""
                    )}
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default ContactMe