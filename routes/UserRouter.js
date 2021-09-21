const Router = require('express').Router()
const controller = require('../controllers/UserController')

<<<<<<< HEAD
Router.get('/', controller.GetProfiles)
// Router.get('/myprofile/:user_id', controller.GetUserProfile)
=======
// Router.get('/', controller.GetProfiles)
<<<<<<< HEAD
Router.get('/:user_id', controller.GetUserProfile)
=======
Router.get('/myprofile/:user_id', controller.GetUserProfile)
>>>>>>> 9e44ccad165b0482007c7dd7083c0e5ae7527017
>>>>>>> c24138f6635bd853023898157dc75bbca1d4ab55
// Router.post('/', controller.CreateUser)

module.exports = Router
