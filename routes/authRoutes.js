const express=require('express')
const { registerController, loginController ,currentUserController} = require('../controllers/authController')
const authMiddleware = require('../middlewares/authMiddleware')
const router=express.Router()


//routes
//REGISTER
router.post('/register',registerController)
//LOGIN
router.post('/login',loginController)

//GETTING CURRENT USER
router.get('/current-user',authMiddleware,currentUserController);

module.exports= router;
