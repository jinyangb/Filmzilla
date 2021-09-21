const Router = require('express').Router()
const controller = require('../controllers/UserController')

// Router.get('/', controller.GetProfiles)
Router.get('/:user_id', controller.GetUserProfile)
// Router.post('/', controller.CreateUser)

module.exports = Router
