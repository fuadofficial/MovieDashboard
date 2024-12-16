// // const mailjet = require('node-mailjet').connect(process.env.MAILJET_API_KEY,process.env.MAILJET_API_SECRET);
// const Mailjet = require("node-mailjet");
// const mailjet = Mailjet.apiConnect(
//   process.env.MAILJET_API_KEY,
//   process.env.MAILJET_API_SECRET
// );
// exports.sendPasswordResetEmail = async (toEmail, verificationCode) => {
//   const request = mailjet.post("send", { version: "v3.1" }).request({
//     Messages: [
//       {
//         From: {
//           Email: "thafs@mailjet.com",
//           Name: "Mailjet Pilot",
//         },
//         To: [
//           {
//             Email: toEmail,
//             Name: "passenger 1",
//           },
//         ],
//         Subject: "Your email flight plan!",
//         TextPart:
//           "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
//         HTMLPart:
//           '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
//       },
//     ],
//   });

//   return response = await request;
// };
