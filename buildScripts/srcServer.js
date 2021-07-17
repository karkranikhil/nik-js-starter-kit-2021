import express from 'express'
import path from 'path'
import open from 'open'
import chalk from 'chalk'
import webpack from 'webpack'
import config from '../webpack.config.dev'

//Fetching Directory path
const __dirname = path.resolve();

//port on which server runs
const PORT = 3000

//initializing our express app
const app = express()

//pass config to webpack
const compiler = webpack(config)

//tell express to use webpack-dev middleware
app.use(require('webpack-dev-middleware')(compiler,{
  publicPath:config.output.publicPath
}))

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

