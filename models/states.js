const { Schema, model } = require('mongoose')

const requiredStringDefObj = {
  required: false,
  type: String
}

const requiredNumberObj = {
  required : false, 
  type: Number
}

const statesInfoSchema = new Schema({
    id: requiredNumberObj,
    _id: requiredStringDefObj,
    name: requiredStringDefObj,
    state: requiredStringDefObj,
})

const States = new model('states', statesInfoSchema)

module.exports = {
    States,
    statesInfoSchema
}
