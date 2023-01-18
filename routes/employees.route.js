const express=require('express');
const Employees = require('../model/employees.model');
const router=express.Router();

//get all employees
router.get('/employees',(req,res)=>{
Employees.find((err,data)=>{
    try{
        if(err){
          return  res.status(400).send({message:"Error while retrieving employees details"})
        }
        return res.status(200).send(data);
    }catch(error){
res.status(500).send({message:"Internal Server Error"})
    }
    
})
});

//get single employee detail

router.get('/employees/:empID',(req,res)=>{
    try{
 Employees.findOne({_id:req.params.empID},(err,data)=>{
        if(err){
            return res.status(400).send({message:"Error while retreiving employee details"})
        }
        return res.status(200).send(data)
    })
    }catch(error){
res.status(500).send({message:"Internal Server Error"})
    }
   
})

//to add a new employee
router.post('/employees',(req,res)=>{
try{
const data=req.body;
const employee=new Employees(data)
employee.save((err,data)=>{
    if(err){
        return res.status(400).send({message:"Error while creating new employee"})
    }
    return res.status(201).send({id:data._id,message:"Employees have been created successfully"})
})
}catch(error){
    res.status(500).send({message:"Internal Server Error"})
}
});

//to update an existing employee
router.put('/employees/:empID', (req, res) => {
    try{
        const employeeID = req.params.empID;
        Employees.findByIdAndUpdate({_id: employeeID}, {$set: req.body}, (err, data) =>{
            if(err){
                return res.status(400).send({message: 'Error while updating an employee.'});
            }

            return res.status(201).send({id: data._id, message: 'Employee details have been updated successfully.'})
        })

    }catch(error){
        res.status(500).send({message: 'Internal Server Error'});
    }
});

// router.delete('/employees/emp:ID',(req,res)=>{
//     try{
//         const employeeID=req.params.empID;
// Employees.findByIdAndDelete({_id:employeeID},(err,data)=>{
//     if(err){
//         return res.status(400).send({message:"Error while deleting employees"})
//     }
//     return res.status(200).send({message:"Employees details have been deleted successfully"})
// })
//     }catch(error){
// return res.status(500).send({message:"Internal Server Error"})
//     }
// })

router.delete('/employees/:empID',(req,res)=>{
    try{
        const employeeID=req.params.empID;
Employees.deleteOne({_id:employeeID},(err,data)=>{
    if(err){
        return res.status(400).send({message:"Error while deleting employees"})
    }
    return res.status(200).send({message:"Employees details have been deleted successfully"})
})
    }catch(error){
return res.status(500).send({message:"Internal Server Error"})
    }
})

module.exports=router;