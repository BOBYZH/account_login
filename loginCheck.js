//function logInCheck() { //for test
function loginCheck(inputInfo) {
  const users = [
 {
   firstName: 'Tony',
   email: 'tony@stark.com',
   password: 'iamironman'
 },
 {
   firstName: 'Steve',
   email: 'captain@hotmail.com',
   password: 'icandothisallday'
 },
 {
   firstName: 'Peter',
   email: 'peter@parker.com',
   password: 'enajyram'
 },
 {
   firstName: 'Natasha',
   email: 'natasha@gamil.com',
   password: '*parol#@$!'
 },
 {
   firstName: 'Nick',
   email: 'nick@shield.com',
   password: 'password'
 }
]

  // dummy data of req.body for test
//  const inputInfo = {
//      email: 'tony@stark.com', 
//      password: 'iamironman',
      
//      email: 'peter@parker.com',
//      password: 'enajyram',
//    }
//  console.log('inputInfo', inputInfo)
  
  let searchResult = users.find(user => user.email === inputInfo.email && user.password === inputInfo.password)
  console.log(searchResult)
  return searchResult
}
  
//logInCheck()

module.exports = loginCheck