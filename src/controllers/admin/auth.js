import jwt from 'jsonwebtoken';
import { adminauth } from '../../model/auth.js';
import { asyncHandler } from "../../utils/asyncHandler.js";
import argon2 from 'argon2';
import dotenv from "dotenv";

// Import JWT_KEY from your environment variables
dotenv.config();
const JWT_KEY = process.env.JWT_KEY;

// Function to hash password using Argon2
async function hashPassword(password) {
  try {
    const hashedPassword = await argon2.hash(password);
    return hashedPassword;
  } catch (error) {
    console.error('Error hashing password:', error);
    throw error;
  }
}

// Admin authentication handler
const adminAuth = asyncHandler(async (req, res) => {
  console.log('render admin');

  const { UserName, Password } = req.body;
  console.log(UserName, Password);
  try {
    let user = await adminauth.findOne({ username: UserName });
    if (!user) {
      return res.status(400).json({ Message: "Account not found" });
    }

    const passwordCompare = await adminauth.findOne({ password: Password });

    if (!passwordCompare) {
      return res.status(400).json({ Message: "Invalid username or password" });
    }

    // If password is correct, generate JWT token
    const Payload = {
      user: {
        id: user.id,
      }
    }
    const AuthToken = jwt.sign(Payload, process.env.JWT_SECRET);
    const success = true;
    res.json({ success, AuthToken });

  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

export { adminAuth };
