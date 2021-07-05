const fs= require("fs")

    //create new file  by using writeFileSync
// fs.writeFileSync("read.txt","Hello there I'm abhishek");
// fs.writeFileSync("read.txt","Hello i'm baack");
    fs.appendFileSync("read.txt","hello are u there")
    // fs.readFileSync("read.txt");
    const buff_data = fs.readFileSync("read.txt")
    const org_data = buff_data.toString()
    console.log(org_data)

    fs.renameSync("read.txt","reading.txt");
