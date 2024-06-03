const { GetDevices, InsertDeivce, DeleteDevice,InsertDeivcePower, GetDeivcePower,InsertDeivceConsumption,GetDeivceConsumption} = require('../controller/deviceController.js')

const router=require('express').Router()

router.get('/',GetDevices)
router.post('/Insert',InsertDeivce)
router.post('/Delete',DeleteDevice)
router.post('/InsertPower',InsertDeivcePower)
router.get('/GetPower',GetDeivcePower)
router.post('/InsertConsumption',InsertDeivceConsumption)
router.get('/GetConsumption',GetDeivceConsumption)





module.exports=router