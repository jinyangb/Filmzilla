const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')

<<<<<<< HEAD
// const AppRouter = require('./routes/AppRouter')
const MovieRouter = require('./routes/MovieRouter')
=======
const AppRouter = require('./routes/AppRouter')
// const MovieRouter = require('./routes/MovieRouter')
>>>>>>> 501cf959a5570bc5d40463a9289e7eb0c06bf1d5
const ReviewRouter = require('./routes/ReviewRouter')
// const UserRouter = require('./routes/UserRouter')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/api', ReviewRouter)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
