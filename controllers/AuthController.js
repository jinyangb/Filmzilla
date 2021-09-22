const { Users } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    console.log(req.body.username)
    const user = await Users.findOne({
      where: { username: req.body.username },
      raw: true
    })
    if(user && (await middleware.comparePassword(user.passwordDigest, req.body.password))){
      let payload = {
        id: user.id,
        username: user.username
      }
      console.log(payload)
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { username, email, password } = req.body
    console.log(req.body)
    let passwordDigest = await middleware.hashPassword(password)
    const user = await Users.create({ username, email, passwordDigest })
    console.log(user)
    res.send(user)
  } catch (error) {
    throw error
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const user = await User.findByPk(req.params.user_id)
    if (
      user &&
      (await middleware.comparePassword(
        user.dataValues.passwordDigest,
        oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      await user.update({ passwordDigest })
      return res.send({ status: 'Ok', payload: user })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {}
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  console.log('payload', payload)
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  UpdatePassword,
  CheckSession
}