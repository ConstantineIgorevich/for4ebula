let fs = require('fs');
fs.readFile('D:/Repos/for4ebula/for4ebula/reading/some-text.txt', 'utf8', (error, fileContent) => {
   if(error) throw error; 
   console.log(fileContent);
});

