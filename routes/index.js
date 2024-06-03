const router=require('express').Router()

const loginRouter=require('./login')
const deviceRouter=require('./device')
router.use('/login',loginRouter)
router.use('/device',deviceRouter)

module.exports=router