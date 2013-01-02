var express = require('express');

var app = express();

app.use(express.json());

app.get('/offices/:id', function(req, res){
    res.send('Office data for id: ' + req.params.id);
});

app.post('/offices', function(req,res){
    res.statusCode = 201;
   res.send('Created new office with name :' + req.body.name); 
});

app.put('/offices/:id', function(req,res){
    res.statusCode = 200;
   res.send('Modified office with name :' + req.body.name); 
});

app.delete('/offices/:id', function(req,res){
    res.statusCode = 200;
   res.send('Deleted office with name :' + req.body.name); 
});


app.listen(3000);