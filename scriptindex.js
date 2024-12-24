const express = require('express')
const app = express()
//template engines
app.set('view engine','ejs');
app.use(express.static('./public'));


app.get('/', function (req, res) {
  res.render('frontpage')
})
app.get('/profile',function(req,res){
    res.render('htmllike');

});

 
 

app.listen(4000)
//giving error page 

