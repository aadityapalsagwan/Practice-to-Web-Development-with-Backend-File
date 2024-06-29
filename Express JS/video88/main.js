// const http = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World15</h1>');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('About Us')
})

app.get('/Contact', (req, res) => {
  res.send('Contact me')
})

app.get('/home', (req, res) => {
  res.send('Home Adi')
})

app.get('/blog', (req, res) => {
  res.send('Write to Blog')
})

app.get('/blog/:slug', (req, res) => {
  res.send(`Hello ${req.params.slug}`)
})



// app.get('/blog/intro-to-Js', (req, res) => {
//   res.send('Write to js')
// })

// app.get('/blog/intro-to-py', (req, res) => {
//   res.send('Write to py')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
