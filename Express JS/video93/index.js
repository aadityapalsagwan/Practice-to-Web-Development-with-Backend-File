import fs from "fs/promises"
import fsn from "fs"
import path from "path"

// import { exit } from "process"

const basepath = "d:\\web site folder\\Express JS\\video93"


let file = await fs.readdir(basepath)
console.log(file)

// let extension = []

for (const item of file) {
    console.log("running for", item)
    let ext = item.split(".")[item.split(".").length - 1]
    console.log(ext)

    if (ext != "js" && ext != "json" && item.split(".").length > 1) {
        if (fsn.existsSync(path.join(basepath, ext))) {
            //    move to the file this dictory 
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))

        }
    }
    // console.log(item)
}