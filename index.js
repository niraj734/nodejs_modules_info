const fs=require('fs')
// console.log(fs);
//inorder to read the file we do fs.readFileSync(fileName,binary encoding)
//readFileSync means you can read a file in synchronous way
const content=fs.readFileSync('nodeModules.txt','utf-8')
console.log(content);

//writing
// fs.writeFileSync() overides the existing content
fs.writeFileSync("copy.txt","Hello Guys I am planning to document my Placement journey","utf-8")
fs.writeFileSync("copy.txt",content,"utf-8")
// fs.appendFileSync() does not override the existing content
fs.appendFileSync("copy.txt","ufsgdsgfjfjghj","utf-8")

//creating directories
// fs.mkdirSync("developer")

//removing directories
// fs.rmdirSync("developer")

//nested directories(Recursive)
fs.mkdirSync("developer/coder/programmer",{recursive:true})

// for deleting a file
fs.unlinkSync("copy.txt")

//similarly there are more functions that fs module provide to work with file systems

fs.readFile("nodeModules.txt","utf-8",function(error,data){
    if(error)console.log(error)
    else(console.log(data))
        
    
})