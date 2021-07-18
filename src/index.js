import './index.css'
import {getUsers, deleteUsers} from './api/userApi'
console.log(`Welcome to my Starter kit`) //eslint-disable-line no-console

getUsers().then(result=>{
  console.log(result)
  if(result.length>0){
    deleteUsers(result[0].id) // to test delete api
  }


})

