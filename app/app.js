var express = require('express');
var app = express();
var mustacheExpress = require('mustache-express');
var bodyParser = require('body-parser');

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey' });
 });

app.post('/api/run',function(req,res){
    //req is in the format { code: "the code" }
    console.log(req);
    res.send(eval(req.code));
    
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
