const express = require('express')
const app = express()


app.get('/', function (req, res) {
  res.send('Hello spandy')
})
//to make website dynamic 
//for dynamoically changining route
app.get('/profile/:username', function (req, res) {
    res.send(`I am ${req.params.username}`);
  })

app.listen(3000)
   