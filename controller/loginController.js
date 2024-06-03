

const db = require('../db'); // Example: const db = mysql.createConnection({...});
var query = 'SELECT * FROM agri_login';
const GetUsers=(req,res)=>{
    var {email_id,password}=req.query
    query=`SELECT * FROM precision_farming.agri_login WHERE email_id="${email_id}"`
    db.query(query,(err, results)=>{
        if(err)console.log(err);
        if(results.length !==0){
            if(results[0].email_id==email_id){
                if(results[0].password==password){
                    res.status(200).json({ status: 'success', message: 'Users Get successfully',results });
                }else{
                    res.json({ status: 'failer', message:'Wrong Password' });
                }
            }else{
                res.json({ status: 'failer', message:'Wrong Username' });
            }
        }else{
            res.json({ status: 'failer', message:'No User Found' });

        }
    })
}

module.exports={
    GetUsers
}