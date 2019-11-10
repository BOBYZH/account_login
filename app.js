const express = require('express')
const exphbs = require('express-handlebars')
const loginCheck = require('./loginCheck')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayouts: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const inputInfo = req.body
  const searchResult = loginCheck(inputInfo)
  const errorMessage = 'invaild email or password'
  console.log(inputInfo)
  if (searchResult === undefined) {
    res.render('index', {errorMessage, inputInfo}) 
  } else {
    const userName = searchResult.firstName
    res.render('welcome', {userName})
  }
})

app.listen(port, () => {
  console.log(`Express app is listening on port ${port}`)
})