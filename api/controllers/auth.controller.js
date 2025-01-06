import User from "../models/user.models.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from JsonWebTokenError;
import { json } from "express";
import { JsonWebTokenError } from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ success: true, message: "Signup successful" });
  } catch (error) {
    if (error.code === 11000) {
      return next(errorHandler(400, "Email already in use"));
    }
    next(error);
  }
};

export const signin = async (req,res,next) => {
  const {email, password} = req.body;

  if(!email || !password || username=== ''|| password=== ''){
    next(errorHandler(400, 'All fields are required'));
  }
  try{
    const validUser = await User.findOne({email});
    if(!validUser){
      next(errorHandler(404,'User not found'));
    }
    const validPassword= bcryptjs.compareSync(password,validUser.password);
    if(!validPassword){
      next(errorHandler(400,'Invalid password'));
    }
    // Continue from here 
    // const token= jwt.sign(
    //   {
    
    //   }
    // )
  }catch(error){
    next(error);
  }
}