const projects=require('../Models/projectModel')

// Add projects

exports.addProjects=async(req,res)=>{
   const userId=req.payload
   const {title, overview,languge,github,demo}=req.body 
   const image=req.file.filename
   console.log(title, overview,languge,github,demo,userId,image)
    try{
        const existingProject =await projects.findOne({github})
        if(existingProject){
            res.status(406).json("projects already Added")
        }
        else{
            const newProjects =new projects({
                title,overview,languges:languge,github,demo,image,userId
            })
            await newProjects.save()
            res.status(200).json(newProjects)

        }
    }
    catch(err){
        console.log(err)
        res.status(404).json(err)
            

    }
}


exports.homeProjects=async(req,res)=>{

    try{
        const result=await projects.find().limit(3)
            if(result){
                res.status(200).json(result)
             }

             else{
        res.status(404).json("No Projects available")
      }

    }
    catch(err){

        console.log(err)
        res.status(406).json(err)

    }
    


}

exports.allProjects=async(req,res)=>{
    console.log("inside all project")
    const search=req.query.search
    console.log(search)
    try{
        const query={
            languges:{$regex:search,$options:'i'}
        }
        // console.log(query)
        const result=await projects.find(query)
            if(result){
                res.status(200).json(result)
             }

             else{
        res.status(404).json("No Projects available")
      }

    }
    catch(err){

        console.log(err)
        res.status(406).json(err)

    }

}

exports.userProjects=async(req,res)=>{
    try{
        const userId=req.payload
        const result=await projects.find({userId})
            if(result){
                res.status(200).json(result)
             }

             else{
        res.status(404).json("No Projects available")
      }

    }
    catch(err){

        console.log(err)
        res.status(406).json(err)

    }

}


exports.editproject = async (req,res)=>{
    const {title,overview,languge,github,demo,image}=req.body
    const userId = req.payload
    const projectImage = req.file ? req.file.filename :image
    const {pid}=req.params
    try{
        const updateProject = await projects.findByIdAndUpdate({_id:pid},
            {title,overview,languges:languge,github,demo,image:projectImage,userId},{new:true})
            await updateProject.save()
            res.status(200).json(updateProject)
    }
    catch(err){
        console.log(err)

        res.status(406).json(err)

        
    }
}



exports.removeProject =async (req,res)=>{
    const {pid}=req.params
    try{
        const result=await projects.findByIdAndDelete({_id:pid})
        res.status(200).json(result)

    }
    catch(err){
        console.log(err)

        res.status(406).json(err)

    }
}


