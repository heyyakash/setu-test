const mongoose = require("mongoose")
const {Schema} = mongoose

const req = {required:true}

const user = new Schema({
    name:{...req,type:String},
    email:{...req,type:String},
    uid:{...req,type:String},
    mobile:{...req,type:Number},
    date:{type:Date,default:Date.now},
    aadhar:{...req,type:Number},
    businessType:{...req,type:String},
    coords:{...req,
        type:Map,
        of: new Schema({
            lat:mongoose.Decimal128,
            lng:mongoose.Decimal128 
        })
    },
    city:{...req,type:String},
    state:{...req,type:String},
    age:{type:Number,default:0},
    description:{...req,type:String}
})

module.exports = mongoose.model('users',user)