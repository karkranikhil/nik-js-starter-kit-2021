
import { generate, extend } from "json-schema-faker";
import {schema} from './mockDataSchema'
import fs from 'fs'
import chalk from 'chalk'

//Extend JSF with fake libs you want to use

extend("faker", ()=>require("faker"))
const json = JSON.stringify(generate(schema))

fs.writeFile('./src/api/db.json', json, function(err){
  if(err){
    return console.log(chalk.red(err))
  } else {
    return console.log(chalk.green("Mock data is ready!!"))
  }
})
