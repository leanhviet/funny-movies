const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./routes')
const bodyParser = require('body-parser')
require('dotenv').config()

const { PORT } = process.env || 3000

app.use(cors())

app.use((req, res, next) => {
  bodyParser.json()(req, res, (err) => {
    if (err) {
      console.log('Unexpected error while parsing json body', err)
      return res.status(400).send({
        message: 'Invalid JSON received'
      })
    }

    next()
  })
})

app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

app.use(routes)

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
