// const fs = require("fs")
// fs.readFile('./nodeText.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(data)
//     }
// });

let obj = new Object();
obj.name = "ss";
let obj2 = obj;
obj2.name = "xxx";
obj2 = null;
console.log(obj, obj2)