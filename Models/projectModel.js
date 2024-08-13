const mongoose=require('mongoose')

const projctSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    overview:{
        type:String,
        required:true
    },
    languges:{
        type:String,
        required:true
    },
    github:{
        type:String,
        required:true
    },
    demo:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }

})


const projects=mongoose.model('projects',projctSchema)

module.exports=projects