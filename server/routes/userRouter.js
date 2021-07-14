const Router = require('express')
const router = new Router()
const UserController = require('../controllers/userController')
const authMiddle = require('../middleware/authMiddle')

router.post('/registration',UserController.regisration)
router.post('/login',UserController.login)
router.get('/auth',authMiddle ,UserController.check)

module.exports = router