const express = require('express')
const mongoose = require('mongoose');
const Employee = require('./models/employee')
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3002

app.set('view engine', 'ejs');

const getRandom = (arr)=>{
    let rno = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno]
}

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})

app.get('/generate', async (req, res) => {
    await Employee.deleteMany({})
    // generate random data...
    let randomName = ["Aaditya","Parth","Harsh","Manoj"]
    let randomLang = ["Python","Java","C",".Net"]
    let randomCity = ["Muzaffarnagar","Meerut","Shamli","Roorkee"]
    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: getRandom(randomName),
            salary: Math.floor(Math.random() * 120000000),
            language: getRandom(randomLang),
            city: getRandom(randomCity),
            isManager: (Math.random()>0.5)?true:false
        })
        console.log(e)
        // await e.save()
    }
    res.render('index', { foo: 'FOO' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})