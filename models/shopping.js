let mongoose = require('mongoose')
mongoose.connect('localhost:27017/ajax-jquery')

let Schema = mongoose.Schema

let customersSchema = new Schema({
  member_id: String,
  name: String,
  address: String,
  zipcode: String,
  phone: String
})

let Customers = mongoose.model('customers', customersSchema)

module.exports = {Customers}
