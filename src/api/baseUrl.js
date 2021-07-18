export default function getBaseUrl(){
  const inDev = window.location.hostname === 'localhost';
  return inDev ? 'http://localhost:3001/':'/'
}
