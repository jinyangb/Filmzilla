const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetProfiles)
Router.get('/:user_id', controller.GetUserProfile)
Router.post('/', controller.CreateUser)
// Router.put('/:post_id', controller.UpdateUser)
// Router.delete('/:post_id', controller.DeleteUser)

module.exports = Router
