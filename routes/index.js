var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'your Node.js application running on EC2!' })
})

module.exports = router
