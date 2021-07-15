import express from 'express'
import path from 'path'
import open from 'open'
import chalk from 'chalk'

//Fetching Directory path
const __dirname = path.resolve();

//port on which server runs
const PORT = 3000

//initializing our express app
const app = express()

//Serving our src app
app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, './src/index.html'))
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

