var express = require('express');
var app = express();

cors = require('cors');
app.use(cors());


port = process.env.PORT || 3001;

app.post('/hello', (req,res)=>{
    res.json({"Greeting" : "Hello "});
  });
  
app.get('/add/:firstNumber/and/:secondNumber', (req,res)=>{
    console.log(req.params.firstNumber + req.params.secondNumber);
    let firstNo = parseInt(req.params.firstNumber),
        secondNo = parseInt(req.params.secondNumber);
    res.json({"Addition" : firstNo + secondNo});
  });

app.get('/', function(req, res) {
    res.send('Hello World !!!!  --> Welcome to the Praneeth World');
})

app.listen(port, function() {
    console.log('Server running on port: ' + port);
});
