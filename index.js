const express = require('express')
const cors = require("cors");
const newsArray =require( "./news.json")
const app = express()
const port = 6001
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/news', (req, res) => {
  res.send(newsArray)
})

app.get("/singleNews/:id", (req, res) => {
  const id = req.params.id;
  const singleNews = newsArray.find((sNews) => sNews.id == id)||null;
  console.log(singleNews)
  res.send(singleNews);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})