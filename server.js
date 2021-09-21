const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')

const AppRouter = require('./routes/AppRouter')
const MovieRouter = require('./routes/MovieRouter')
const ReviewRouter = require('./routes/ReviewRouter')
// const UserRouter = require('./routes/UserRouter')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/api', ReviewRouter, MovieRouter)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
