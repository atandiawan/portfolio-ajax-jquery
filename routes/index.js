let express = require('express')
let router = express.Router()
let bodyParser = require('body-parser')
let Models = require('../models/shopping.js')
let http = require('http')

router.use(bodyParser())

//client
router.get('/register', function(req, res, next) {
  res.render('register.ejs')
})

router.get('/api/display/customer', function(req, res, next) {
  Models.Customers.find({}, function(err, result) {
    if (err) {
      console.log(err)
    } else {
      res.json(result)
    }
  })
})

//SERVER
router.post('/api/register/customer', function(req, res, next) {
  console.log(req.body.member_id)
  let newCustomer = new Models.Customers({ "member_id": req.body.member_id, "name": req.body.name, "address": req.body.address, "zipcode": req.body.zipcode, "phone": req.body.phone }).save(function(err, result) {
    if (err) {
      console.log(err)
    }
    res.redirect('/register')
  })
})
module.exports = router
