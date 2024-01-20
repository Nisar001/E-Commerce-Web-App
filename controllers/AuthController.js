import UserModel from "../models/UserModel.js";
import { comparePassword, hashPassword} from './../helpers/AuthHelper.js';
import JWT from 'jsonwebtoken';

export const registerController = async(req, res) => {
   try {
      const {name, email, password, phone, address} = req.body;
      //validaions
      if(!name){
         return res.send({error: 'Name is Required'})
      }
      if(!email){
         return res.send({error: 'Email is Required'})
      }
      if(!password){
         return res.send({error: 'Password is Required'})
      }
      if(!phone){
         return res.send({error: 'Phone is Required'})
      }
      if(!address){
         return res.send({error: 'Address is Required'})
      }

      //Check User
      const existingUser = await UserModel.findOne({email})
      //Existing User
      if(existingUser){
         return res.status(200).send({
            success: true,
            message: "Already Register Please Login"
         })
      }
      //register user
      const hashedPassword = await hashPassword(password);
      // save
      const user = await new UserModel({
         name, 
         email, 
         phone, 
         address, 
         password:hashedPassword
      }).save();

      res.status(201).send({
         success:true,
         message:"User Register Successfully",
         user
      })
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success:false,
         message:'Error in Registration',
         error
      })
   }
};

// LOGIN POST

export const loginController = async(req, res) => {
   try {
      const {email, password} = req.body;
      // Validation
      if(!email || !password ){
         return res.status(404).send({
            success:false,
            message:'Invalid email or Password'
         })
      }
      // Check USer
      const user = await UserModel.findOne({email});
      if(!user){
         return res.status(404).send({
            success:false,
            message:"Email is nor Register"
         })
      }
      const match = await comparePassword(password, user.password)
      if(!match){
         return res.status(200).send({
            success:false,
            message:'Invalid Password'
         })
      }

      // Token

      const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET, {
         expiresIn: "2d",
      });
      res.status(200).send({
         success:true,
         message: "Login Successfully",
         user:{
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address
         },
         token,
      })

   } catch (error) {
      console.log(error);
      res.status(500).send({
         success:false,
         message:'Error in Login',
         error
      })
   }
};

// test controller
export const testController = (req, res) => {
   res.send("Protected Route");
}