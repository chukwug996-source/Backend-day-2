require('dotenv').config()//to hide important stuffs
const express = require('express');
const app = express();
const port = process.env.PORT;
app.get('/', (req, res) =>{
  res.send('Hello world from Express!');
})
app.listen(port, () =>{
  console.log(`App is now running: http://localhost:${port}`)
})