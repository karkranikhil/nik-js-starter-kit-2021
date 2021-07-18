import getBaseUrl from "./baseUrl"
const baseUrl = getBaseUrl()

/***Get User Method ***/
export function getUsers(){
  return get('users')
}
/***Delete User Method ***/
export function deleteUsers(id){
  return del(`users/${id}`)
}

/***Get Call Helper ***/
function get(url){
  return fetch(baseUrl+url).then(onSuccess, onError)
}
/***Delete Call Helper ***/
function del(url){
  const request = new Request(baseUrl+url, { method:'DELETE'})
  return fetch(request).then(onSuccess, onError)
}

/***Api Success Helper ***/
function onSuccess(response){
  return response.json()
}
/***Api Error Helper ***/
function onError(error){
  console.error(error) //eslint-disable-line no-console
}
