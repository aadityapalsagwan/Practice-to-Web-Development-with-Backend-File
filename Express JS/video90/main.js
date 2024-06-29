const express = require('express')
const app = express()
const port = 3000
const blogs = require('./routes/blogs')
const fs =require("fs")

// app.use(express.static("public"))
app.use('/blogs', blogs)

//middleware 1

app.use( (req, res, next) => {
    console.log(req.headers) 
    req.adi = "I'm Aditya";
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    // res.send("hacked by middleware")
    next()
  })

//middleware 2

app.use( (req, res, next) => {
    console.log('Chutiya')
    next()
  })
  




app.get('/', (req, res) => {
  res.send('Hello World!-7')
})

app.get('/about', (req, res) => {
  res.send('About Us ' + req.adi)
})
app.get('/contact', (req, res) => {
  res.send('Contact kero ba')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})