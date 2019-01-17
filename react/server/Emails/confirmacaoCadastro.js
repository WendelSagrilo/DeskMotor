var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'wendelsagrilo@gmail.com',
        pass: '92418344560OlirgasHaras'
    }
});

// var send =  transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log('Foi foi foi: ' + info.response);
//     }
// });


module.exports = function(){
  return transporter;
}
