const express = require('express')
const app = express()
const {mongodb } = require('mongodb')
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('HI Naveen pal singh')
})
app.listen(process.env.PORT || 3000)
