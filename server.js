const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const path = require('path')

const AppRouter = require('./routes/AppRouter')
const MovieRouter = require('./routes/MovieRouter')
const ReviewRouter = require('./routes/ReviewRouter')
const UserRouter = require('./routes/UserRouter')

const PORT = process.env.PORT || 3001
const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', ReviewRouter, MovieRouter, UserRouter)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`))
  })
}

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
