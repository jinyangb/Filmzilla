const Router = require('express').Router()

const controller = require('../controllers/AuthController')

const cont = require('../controllers/UserController')
const middleware = require('../middleware')

// Router.get('/', controller.GetProfiles)
Router.get('/myprofile/:user_id', cont.GetUserProfile)
// Router.post('/', controller.CreateUser)
Router.post('/auth/login', controller.Login)
Router.post('/auth/register', controller.Register)
Router.get('/auth/session', middleware.stripToken, middleware.verifyToken, controller.CheckSession)

module.exports = Router
