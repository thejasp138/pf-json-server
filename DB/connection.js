const mongoose=require('mongoose')
const connectionString=process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("MongoDB Atlas Connection Success")
}).catch((err)=>{
    console.log("MongoDB Connection FAilled")
    console.log(err)
})