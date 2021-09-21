const Router = require('express').Router()
const controller = require('../controllers/UserController')
Router.get('/', controller.GetProfiles)
// Router.get('/myprofile/:user_id', controller.GetUserProfil
// Router.get('/', controller.GetProfiles)

Router.get('/:user_id', controller.GetUserProfile)

Router.get('/myprofile/:user_id', controller.GetUserProfile)

// Router.post('/', controller.CreateUser)

module.exports = Router
