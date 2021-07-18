import './index.css'
import {getUsers} from './api/userApi'
console.log(`Welcome to my Starter kit`) //eslint-disable-line no-console

getUsers().then(result=>{
  console.log(result)

})


