var express   =  require('express');
var apiai     =  require('apiai')('173023bdeb6a4441a908d1cb4982614b');
var app       =  express();



app.use(express.static(__dirname + '/views')); // html
app.use(express.static(__dirname + '/public'));// js ,css

app.get('/', function(req, res){
	//res.send('Welcopme to chat bot');
	res.sendFile('index.html');
});

app.listen(8888,function(){
      console.log('App is Running on 8888..');
});