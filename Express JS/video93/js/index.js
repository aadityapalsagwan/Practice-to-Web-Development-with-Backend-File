import fs from "fs/promises"
import fsn from "fs"
import path from "path"

// import { exit } from "process"

const basepath = "d:\\web site folder\\Express JS\\video93"


let file = await fs.readdir(basepath)
console.log(file)

// let extension = []

for (const item of file) {
    let ext = item.split(".")[item.split(".").length -1]
    console.log(ext)
    if(fsn.existsSync(path.join(basepath,ext))){
    //    move to the file this dictory 
       fs.rename(path.join(basepath, item),path.join(basepath,ext, item))
    }
    else{
        fs.mkdir(ext)
    }
    console.log(item)
}