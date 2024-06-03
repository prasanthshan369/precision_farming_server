const { GetUsers } = require('../controller/loginController')

const router=require('express').Router()

router.get('/',GetUsers)


module.exports=router