const Router = require('express').Router()
const controller = require('../controllers/AuthController')
// const middleware = require('../middleware')

// Router.get('/', controller.GetProfiles)
// Router.get('/myprofile/:user_id', controller.GetUserProfile)
// Router.post('/', controller.CreateUser)
Router.post('/login', controller.Login)
Router.post('/register', controller.Register)

module.exports = Router
