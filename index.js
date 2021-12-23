const express = require('express');
const app = express();
app.get('/', function(res,req) {
  req.sendFile(__dirname + '/public/index.html')
})
app.use(express.static('public'))
app.listen('3200');
console.log('ok');