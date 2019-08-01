const express = require('express')
const cors = require('cors')
const app = express()
const {mongoose} = require('./config/database')

const router = require('./config/routes')

app.use(express.static("./public"));

const port = 3006

app.use(express.json())
app.use(cors())

app.use('/', router)

app.listen(port, () => {
    console.log('listening on port', port)
})