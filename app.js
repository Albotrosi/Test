let fs = require('fs');
fs.readFile('hello.txt', 'utf8', function(error, fileContent){
   if(error) throw error; // ошибка чтения файла, если есть
   console.log(fileContent); // содержимое файла
   
   let toWrite = fileContent + 'Тише, мыши, кот на крыше';

   fs.writeFile('hello.txt', toWrite, function(error){
      if(error) throw error; // ошибка чтения файла, если есть
      console.log('Данные успешно записаны записать файл');
   });
})