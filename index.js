const express = require('express')
const cors = require("cors");
const newsArray =require( "./news.json")
const app = express()
const port = 6001
console.log(newsArray)
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/news', (req, res) => {
  res.send(newsArray)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})