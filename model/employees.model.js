const mongoose=require('mongoose');

//Define Schema
const employeeSchema=mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
mobileNumber:{
    type:String,
    required:true,
    unique:true
},
address:{
    type:String,
    required:true
},
dob:{
    type:String,
    required:true
},
profession:{
    type:String
}
})

module.exports=mongoose.model('Employees',employeeSchema);