const fs=require('fs')
// console.log(fs);
//inorder to read the file we do fs.readFileSync(fileName,binary encoding)
//readFileSync means you can read a file in synchronous way
const content=fs.readFileSync('nodeModules.txt','utf-8')
console.log(content);

