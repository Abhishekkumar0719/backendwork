const path= require("path");
console.log(path.dirname("D:\node Js\pathModule\index.js"));
console.log(path.extname("D:\node Js\pathModule\index.js"));
console.log(path.basename("D:\node Js\pathModule\index.js"));
console.log(path.parse("D:\node Js\pathModule\index.js"));
const mymodule=(path.parse("D:\node Js\pathModule\index.js"));
console.log(mymodule.root)