/**
 * NodemailerController
 *
 * @description :: Server-side logic for managing nodemailers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	forgot_password(req,res){
    //the first step is to find the user having the inputed email ------------ first step.
    // const email = req.body.email;
 //the second step is to display the user crediential with the email
        'use strict';
    const nodemailer = require('nodemailer');
    // require the link from the after create in the /model/user.js
    const collectLinkforusertoclick = require('../models/User.js');
    // the next step is to get the link from the above required js  
        console.log(collectLinkforusertoclick.afterCreate);
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    nodemailer.createTestAccount((err, account) => {
        // console.log('this is the email of the user'+email)
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'oghenerukevwejeff@gmail.com',
            pass: 'october3119931'
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"JEFF OFOBRUKWETA 👻" <chownow@chownow.com>', // sender address
        to: `oghenerukevwejeff@gmail.com, oghenerukevwejeff@gmail.com`, // list of receivers
        subject: 'RESSET PASSWORD FOR CHOWNOW ✔', // Subject line
        text: 'resset your password', // plain text body
        html: '<b>Hello world?</b><div>my world</div>'// html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
    });
}  
};

