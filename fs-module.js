const fs = require("node:fs");

const fileContents = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContents);

fs.readFile("./file.txt", "utf-8", (error, data) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log(data,);
    }
});

fs.writeFileSync("./greet.txt", "Hello Justin!");

fs.writeFile("./greet.txt", " Hello Whatsapp!!", { flag: "a" }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File written");
    }
});