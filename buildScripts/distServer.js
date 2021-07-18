/* eslint-disable no-console */
import express from 'express'
import path from 'path'
import open from 'open'
import chalk from 'chalk'
import compression from 'compression'


//Fetching Directory path
const __dirname = path.resolve();

//port on which server runs
const PORT = 3000

//initializing our express app
const app = express()

app.use(compression())
app.use(express.static('dist'))


//Serving our src app
app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

//Mock API to serve user data
app.get('/users', (req, res)=>{
  res.json([
    {"id":1, "Name":"Nik"},
    {"id":2, "Name":"Mike"},
    {"id":3, "Name":"Smith"}
  ])
})

//listening app and opening app
app.listen(PORT, (err)=>{
  if(err){
    console.log(err)
  } else {
    open(`http://localhost:${PORT}`)
    console.log(chalk.green(`Server is running on http://localhost:${PORT}`))
  }
})

