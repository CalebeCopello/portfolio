require('dotenv').config
const express = require('express')
const cors = require('cors')
const path = require('path')

const contactRoute = require('./routes/contactRoute')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', contactRoute)

if (process.env.NODE_ENV === 'PRODUCTION') {
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>(
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    ))
}

const port = process.env.PORT || 5000

app.listen(port, console.log(`server at port 5000`))