const express = require('express')
const path = require ('path')
const app = express()
const port = 1200

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.get('/', function(req, res){
  res.render('index')
});
app.get('/index', function(req, res){
  res.render('index')
});
app.get('/attendence', function(req, res){
  res.render('index')
});
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})