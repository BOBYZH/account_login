const express = require('express')
const exphbs = require('express-handlebars')
const login = require('./login')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayouts: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const accountInfo = req.body
  res.render('index', { email, password })
})

app.listen(port, () => {
  console.log(`Express app is listening on port ${port}`)
})