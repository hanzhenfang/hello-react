// const fs = require("fs")
// fs.readFile('./nodeText.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(data)
//     }
// });

const fs = require("fs");

// fs.writeFile('./hello.txt', "吴彦祖", { flag: "a" }, (erro) => {
//     if (erro) {
//         console.log(erro)
//     }
// })

fs.readdir(".", (erro, data) => {
    console.log(data);
})