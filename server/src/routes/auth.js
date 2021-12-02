const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Models
const UserModel = require('../model/user')

const register = async (req, res) => {
  const { password, email } = req.body || ''

  UserModel.findOne({ email }).then((user) => {
    if (user) {
      res.json({
        message: 'Email already exists',
        status: 500
      })
    }
  })

  bcrypt.hash(password, 10, (err, hashedPass) => {
    if (err) {
      res.send({
        message: err,
        status: 500
      })
    }

    const newUser = {
      email,
      password: hashedPass
    }

    const user = new UserModel(newUser)
    user
      .save()
      .then(() => {
        res.send({
          message: 'Register successfully',
          status: 200
        })
      })
      .catch(() => {
        res.send({
          message: 'An error occurred!',
          status: 500
        })
      })
  })
}

const login = async (req, res) => {
  const { password, email } = req.body || ''

  UserModel.findOne({ email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.send({
            message: err,
            status: 500
          })
        }

        if (result) {
          let token = jwt.sign({ email: user.email }, 'secretRemiValue', {
            expiresIn: '1h'
          })

          res.send({
            message: 'Register successfully',
            token,
            status: 200
          })
        } else {
          res.send({
            message: 'Password does not matched',
            status: 200
          })
        }
      })
    } else {
      res.json({
        message: 'No user found!',
        status: 500
      })
    }
  })
}

module.exports = {
  register,
  login
}
