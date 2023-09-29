require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/facebook', (req, res) => {
  res.send('Hello World!')
})
app.get('/google', (req, res) => {
    res.send('Hello All!')
  })

app.get('/login',(req,res)=>{
    res.send('<h1>Welcome In back End</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})