//loads .env file contents into process.env by defult 
require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router = require('./Routes/routes')
require('./DB/connection')


//create server instance 
const pfServer=express()

//configuring cros into server

pfServer.use(cors())

//configuring json conversion on server

pfServer.use(express.json())

//configuring cors intto server
pfServer.use(router)

pfServer.use('/uploads',express.static('./uploads'))


const PORT=3000


//calling listen method tto impliment listen mode for server to run 

pfServer.listen(PORT,()=>{
    console.log(`server is running at:${PORT}`)
})

// setting responce for base_url getrequest


pfServer.get('/',(reg,res)=>{
    res.status(200).send("<h1>the get requiset hit success</h1>")
})
