import nodemailer from 'nodemailer';
import User  from "@/app/models/userModel";
import bcryptjs from'bcryptjs';

export const sendEmail = async({email, emailType, userId}: {email: string; emailType: string; userId: any}) => {

try{
    const hashedToken = await bcryptjs.hash(userId.toString(), 10)

    if(emailType === "VERIFY") {

    await User.findByIdAndUpdate(userId, 
        {verifyToken: hashedToken, 
            verifyTokenExpiry:  Date.now() + 3600000})
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, 
        {verifyToken: hashedToken, 
            verifyTokenExpiry:  Date.now() + 3600000})

        }

        var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2b11f9edb0df16",
    pass: "****2a44"
  }
});

const mailOptions = {
    from: 'ankita291103@gmail.com',
    to: email,
    subject: emailType === "VERIFY" ? "Verify your email" 
    : "Reset your password",
    html: `<p>Click <a href="${process.env.DOMAIN}/
    verifyemail?token=${hashedToken}">here</a>
    to $ {emailType === "VERIFY" ? "verify your email" : 
    "reset your passwor"}
    or copy and paste the link below in your browser.
    <br> $ {process.env.DOMAIN}/verifyemail?
    token=${hashedToken}
    </p>`
}

const mailresponse = await transport.sendMail(mailOptions);
return mailresponse;


} catch (error: any) {
    throw new Error(error.message);
}
}