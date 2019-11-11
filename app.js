const express = require('express')
const exphbs = require('express-handlebars')
const loginCheck = require('./loginCheck')
const session = require('express-session')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayouts: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))

app.use(session({
  secret: 'avengers assemble',
  resave: true,
  saveUninitialized: false
}))

app.get('/', (req, res) => {
  if (req.session.userName) {
    res.render('welcome', { userName: req.session.userName })
  } else {
    res.render('index')
  }
})

app.post('/', (req, res) => {
  const inputInfo = req.body
  const searchResult = loginCheck(inputInfo)
  const errorMessage = 'invalid email or password'
  console.log(inputInfo)
  if (searchResult === undefined) {
    res.render('index', { errorMessage, inputInfo })
  } else {
    const userName = searchResult.firstName
    req.session.userName = userName
    console.log(req.session.id)
    res.render('welcome', { userName })
  }
})

app.get('/logout', function (req, res) {
  req.session.destroy()
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Express app is listening on port ${port}`)
})