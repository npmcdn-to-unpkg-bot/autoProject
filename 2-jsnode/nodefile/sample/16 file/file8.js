var fs = require("fs");

console.log("׼��ɾ���ļ���");
fs.unlink('input.txt', function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("�ļ�ɾ���ɹ���");
});