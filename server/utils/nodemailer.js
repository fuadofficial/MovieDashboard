const nodemailer = require("nodemailer");

exports.sendPasswordResetEmailNodeMail = async (toEmail, verificationCode) => {
  console.log(
    "🚀 ~ file: nodeMail.js:4 ~ exports.sendPasswordResetEmailNodeMail= ~ toEmail:",
    toEmail
  );
  const transporter = nodemailer.createTransport({
    service: "gmail", // can be replaced with any email service provider
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD, 
    },
  });

  const mailOptions = {
    from: "reset@moviedb.com", // replace with your email
    to: toEmail,
    subject: "Movie DB Password reset",
    // text: ``, // replace with your message
    html: `
    <h1> Password Reset Code</h1>
    <p>You have requested to reset your password. Please use the following verification code to reset your password:</p>
    <h2 style="text-align: center; background-color: #f1f1f1; padding: 10px; border-radius: 5px;">${verificationCode}</h2>
    <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
  `,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log("Email sent: " + info.response);
  return info;
};
