import userModel from "../models/auth.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";
import otpModel from "../models/otpSchema.js";

export const login = async (req, res) => {
  const { name, phoneNumber, email, password } = req.body;
  try {
    if (!name || !phoneNumber || !email || !password) {
      return res.status(400).json({
        message: "Required fields are missing",
        status: false,
        data: null,
      });
    }

    const userData = await userModel.findOne({ email });

    if (userData) {
      return res.status(404).json({
        message: "User already exist",
        status: false,
        data: null,
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    // console.log(hashPassword);

    const userObj = {
      ...req.body,
      password: hashPassword,
    };

    // console.log(userObj);

    await userModel.create(userObj)


    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: "465",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const OTP = uuidv4().slice(0, 6);
    console.log(OTP);

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Your OTP code for verification!",
      html: `
         <div style="font-family: Arial; background:#f4f4f4; padding:20px;">
      <div style="max-width:400px; margin:auto; background:#fff; padding:20px; border-radius:8px; text-align:center;">
        <h2 style="color:#333;">Verify Your Email</h2>
        <p>Your OTP code is:</p>
        <a 
          style="
            display:inline-block;
            padding:12px 24px;
            background:#4CAF50;
            color:#fff;
            text-decoration:none;
            font-size:18px;
            border-radius:6px;
            margin:10px 0;
          "
        >
          ${OTP}
        </a>
        <p style="font-size:12px;color:#777;">This code will expire in 5 minutes.</p>
      </div>
    </div>
        `,
    });

    const OTPObj = {
        email : email,
        otp: OTP
    }

    await otpModel.create(OTPObj)

    const resData = {
        name,
        email,
        phoneNumber
    }

    res.status(200).json({
        message : "User register successfully ",
        status: true,
        data: resData
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Internal server error",
      status: false,
      data: null,
    });
  }
};
