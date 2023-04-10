const fs = require ("fs");

fs.appendFileSync("hello.txt","1");

fs.appendFile("hello.txt","2", function(error) {
    if (error) throw error;
    console.log ("запись файла завершена");
    let data = fs.readFileSync("hello.txt","utf8");
    console.log (data);
})