const db = require('../db'); // Example: const db = mysql.createConnection({...});
var query = 'SELECT * FROM agri_login';
const GetDevices=(req,res)=>{
    var area_id=req.query.area_id
    sql=`Select * from agri_devices where area_id="${area_id}"`
    db.query(sql, (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Failed to get agri device", status: 500 });
        } else {
          res.status(200).json({ message: "Successfully get agri device", status: 200,result });
        }
      });
}
const InsertDeivce=(req,res)=>{
    const {area_id, device_id,device_name,device_type, remarks}=req.body
    const values = [ area_id, device_id, device_name, device_type, remarks];
    const sql = "INSERT INTO agri_devices (dates, area_id, device_id, device_name, device_type, remarks) VALUES (Now(), ?, ?, ?, ?, ?)";
    
    db.query(sql, values, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to insert agri device", status: 500 });
      } else {
        res.status(200).json({ message: "Successfully inserted agri device", status: 200 });
      }
    });
}
const DeleteDevice=(req,res)=>{
    var device_id=req.query.device_id
    sql=`DELETE FROM agri_devices WHERE device_id ="${device_id}"`
    db.query(sql, (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Failed to delete agri device", status: 500 });
        } else {
          res.status(200).json({ message: "Successfully deleted agri device", status: 200 });
        }
      });
}
const InsertDeivcePower=(req,res)=>{
    var {power,device_id}=req.query
    var values=[device_id,power]
    sql=`INSERT INTO device_energy (date, device_id, power) VALUES (Now(), ?, ?)`
    db.query(sql,values,(err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Failed to insert agri device power", status: 500 });
        } else {
          res.status(200).json({ message: "Successfully insert agri device power", status: 200,result });
        }
      });
}
const GetDeivcePower=(req,res)=>{
  var {device_id,StartDate,EndDate}=req.query
    sql=`Select * from device_energy where device_id="${device_id}" AND date >="${StartDate}" AND date <="${EndDate}"`
    db.query(sql, (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Failed to get agri device power", status: 500 });
        } else {
          res.status(200).json({ message: "Successfully get agri device power", status: 200,result });
        }
      });
}
const InsertDeivceConsumption=(req,res)=>{
    var {consumption,device_id}=req.query
    var values=[device_id,consumption]
    sql=`INSERT INTO device_consumption (date, device_id, consumption) VALUES (Now(), ?, ?)`
    db.query(sql,values,(err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Failed to insert agri device consumption", status: 500 });
        } else {
          res.status(200).json({ message: "Successfully insert agri device consumption", status: 200,result });
        }
      });
}
const GetDeivceConsumption=(req,res)=>{
    var {device_id,StartDate,EndDate}=req.query
    console.log(req.query);
    sql=`Select * from device_consumption where device_id="${device_id}" AND date >="${StartDate}" AND date <="${EndDate}"`
    db.query(sql, (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Failed to get agri device consumption", status: 500 });
        } else {
          res.status(200).json({ message: "Successfully get agri device consumption", status: 200,result });
        }
      });
}
module.exports={
    GetDevices,
    InsertDeivce,
    DeleteDevice,
    InsertDeivcePower,
    GetDeivcePower,
    InsertDeivceConsumption,
    GetDeivceConsumption
}