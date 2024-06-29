const { error } = require("console")
const fs = require("fs")
console.log(fs)
console.log("Starting..")
// fs.writeFileSync("Aditya.txt","Aditya Pal is a good boy ")

fs.writeFile("Adi.txt","Adi is a good boy." ,()=>{
    console.log("Done.")
    fs.readFile("adi.txt", (error,data)=>{
        // console.log(error,data)  // data ko encript form mai rakta hai
        console.log(error,data.toString())  // data ko read kerna k liya means data decript 
    })

    fs.appendFile("Aditya.txt", "adirobo",(e,d)=>{
        console.log(d)
    })
})
console.log("Ending...")