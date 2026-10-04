const express=require('express')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const users=require('../data/users.json')
const authMiddleware = require('../middleware/authMiddleware')
const router=express.Router()


router.post('/login', async(req,res)=>{
    try{
        const {username, password} =req.body

        if(!username || !password){

            return res.status(400).json({
                message:'Username and password are required'
            })
        }

        const user=users.find(
            (user) => user.username=username
        )

        if(!user){
            return res.status(401).json({
                message:'Invalid username or password',
            })
        }

        const isPasswordValid=await bcrypt.compare(
            password,
            user.password
        )

        if(!isPasswordValid)
        {
            return res.status(401).json({
                message:'Invalid username or password',
            })
        }

        const token=jwt.sign(
            {
                userId:user.id,
                username:user.username,
            },
            process.env.JWT_SECRET,
            {
                expiresIn:'1h'
            }
        )

        const userData={
            id:user.id,
            username:user.username,
            name:user.name,
            email:user.email,
            employeeId:user.employeeId,
            designation:user.designation,
            department:user.department,
            location:user.location,
        }

        return res.status(200).json({
            message:'Login successful',
            token,
            user:userData,
        })
    }catch(error){
        console.error('Login error:', error)

        return res.status(500).json({
            message:'Internal server error',
        })
    }
})

router.get('/me', authMiddleware, (req, res) => {
  const user = users.find(
    (user) => user.id === req.user.userId
  )

  if (!user) {
    return res.status(404).json({
      message: 'User not found',
    })
  }

  const userData = {
    id: user.id,
    username: user.username,
    name: user.name,
    email: user.email,
    employeeId: user.employeeId,
    designation: user.designation,
    department: user.department,
    location: user.location,
  }

  return res.status(200).json({
    user: userData,
  })
})

module.exports=router