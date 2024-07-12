require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login":"Shafiul alma",
  "id":1904006,
  "node_id":"shafiu1"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("hiteshdotcom")
})

app.get('/github',(req,res)=>{
  res.json(githubData)
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please login at Shafiul world</h1>')

})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})