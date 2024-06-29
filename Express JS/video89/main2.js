const express = require('express')
const blog = require('./routes/blog')



const app = express()
const port = 3001

app.use(express.static('public'))
app.use('/blog', blog)

app.get('/', (req, res) => {
    console.log("I'm using a get request..")
    res.send('Hello World-5!')
})

app.post('/', (req, res) => {
    console.log("I'm using a post request..")
    res.send('Hello World-post!')
})

app.put('/', (req, res) => {
    console.log("I'm using a put request..")
    res.send('Hello World-put!')
})

app.put('/mypage', (req, res) => {
    console.log("This is a index page....")
    res.send('ya index page hai......')
    res.sendFile('public/mypage.html', {root:__dirname})
})

app.get('/api', (req, res) => {
    res.json({a:1,b:5,c:8,d:9,e:2})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})