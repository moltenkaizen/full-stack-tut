const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }
    const {error, value} = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'bad email'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules:
            <br>
            1. It must contain only the following characters: lower case, upper case, numerics
            <br>
            2. IT must be at least 8 characters and not more than 32 characters in length. 
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid request'
          })
      }

    } else {
      next()
    }
  }
}
