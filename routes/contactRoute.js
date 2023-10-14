const router = require('express').Router()
const nodemailer = require('nodemailer')
require('dotenv').config

router.post('/contact', (req, res) => {
    let data = req.body
    if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
        return res.json({msg: "Preencha todos os campos!"})
    }
    let smtpTransporter = nodemailer.createTransport({
        service: 'Gmail',
        port: 456,
        auth:{
            user: 'calebecopello@gmail.com',
            pass: 'pvqk yqnv faek cmjc',
        }
    })
    let mailOptions = {
        from: data.email,
        to: 'calebecopello@gmail.com',
        subject: `Mensagem de ${data.name}`,
        html: `
        
        <h3>Informações<h3/>
        <ul>
        <li>Nome: ${data.name} <li/>
        <li>Email: ${data.email} <li/>
        <ul/>
        <h3>Mensagem:<h3/>
        <p>${data.message}<p/>
        `
    }
    smtpTransporter.sendMail(mailOptions,(error) => {
        try {
            if(error) {
                console.log(error)
                return res.status(400).json({msg: 'Preencha todos os campos'})
            } 
            res.status(200).json({msg: 'Obrigado pelo contato!'})
        } catch (error) {
            if (error) return res.status(500).json({msg: 'Houve um erro!'})
        }
    })
})

module.exports=router