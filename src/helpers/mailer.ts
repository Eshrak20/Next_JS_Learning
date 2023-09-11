import nodemailer from 'nodemailer';
import User from "@/models/userModel";
import bcryptjs from 'bcryptjs';

export const sendEmail = async({email, emailType, userId}:any) =>{

    try {
        // create a hash token 
        const hashedToken = bcryptjs.hash(userId.toString(), 10)

    if (email === "VERIFY") {
        await User.findByIdAndUpdate(userId, {
            verifyToken:hashedToken,
            verifyTokenExpiry:Date.now() + 3600000,
        })
    }
    if (email === 'RESET') {
        await User.findByIdAndUpdate(userId, {
            forgotPasswordToken:hashedToken,
            forgotPasswordTokenExpiry:Date.now() + 3600000,
        })
    }
    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "74b45fd7300392",
          pass: "4a171b2fd650af"
          //TODO: add these credentials to .env
        }
      });

      const mailOption = {
        from:'eshrakg62@gmail.com',
        to: email,
        subject : emailType === "VERIFY" ? "Verify your email" : "Reset your password",
        html: `<p>Click <a href="${process.env.domain}/verifyemail?token=${hashedToken}"> here </a> to $ {"Reset your password"}</p>`
      }
    } catch (error:any) {
        throw new Error(error.message)
    }

}