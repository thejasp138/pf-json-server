

const express=require('express')
const userController=require('../Controllers/userController')
const projectController=require('../Controllers/projectController')
const router=express.Router()
const jwtmiddle=require('../Middlewares/jwtMiddleware')
const multerconfig=require('../Middlewares/multerMiddleware')


router.post('/register',userController.userRegister)
router.post('/login',userController.userLogin)
router.post('/addproject',jwtmiddle,multerconfig.single('image'),projectController.addProjects)
router.get('/home-projects',projectController.homeProjects)
router.get('/all-Projects',jwtmiddle,projectController.allProjects)
router.get('/user-Projects',jwtmiddle,projectController.userProjects)
router.put('/edit-project/:pid',jwtmiddle,multerconfig.single('image'),projectController.editproject)
router.delete('/delete-project/:pid',jwtmiddle,projectController.removeProject)



module.exports=router