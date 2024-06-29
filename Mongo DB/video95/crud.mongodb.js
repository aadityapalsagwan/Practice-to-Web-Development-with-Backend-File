use("Crud-Adi")

db.createCollection("sources")

db.sources.insertOne({
    Name :"Aditya Pal",
    Age : 20,
    Course: 25
})

db.sources.insertMany([
    { Name: "Harsh", Age: 20, Course: 25 },
    { Name: "Atul", Age: 20, Course: 25 },
    { Name: "Parth", Age: 20, Course: 25 }
    // { Name: "Aditya Pal", Age: 20, Course: 25 },
    // { Name: "John Doe", Age: 22, Course: 30 },
    // { Name: "Jane Smith", Age: 25, Course: 28 },
    // { Name: "Bob Johnson", Age: 21, Course: 32 },
    // { Name: "Alice Brown", Age: 23, Course: 27 },
    // { Name: "Charlie Lee", Age: 24, Course: 29 },
    // { Name: "David Miller", Age: 26, Course: 31 },
    // { Name: "Eva Davis", Age: 22, Course: 26 },
    // { Name: "Frank White", Age: 27, Course: 33 },
    // { Name: "Grace Taylor", Age: 21, Course: 34 }
]);

// READ

// let a = db.sources.find({Course: 25})
// console.log(a)
// console.log(a.count())
// console.log(a.toArray()) // all documents are return

// UPDATE

// db.sources.updateOne({Course:25},{$set:{Course:45}})
// db.sources.updateMany({Course:0},{$set:{Course:30}})




//DELETE
db.sources.deleteMany({Course:30})