const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

//BODY PARSER MIDDLEWARE 

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//SETTING UP A ROUTE FOR RECEIVEING EMAIL ADDRESSES AND SENDING QUOTES
app.post('/send-email', (req, res)=> {
    const { email } = req.body;
    console.log(req.body)

    //GENERATING THE QUOTES 

    const quoteString = "QUOTES FOR YOU Skimming 50 square meters: R600  Ceilling 65 square meters: R900 Painting 40 square meters: R1500 ";

    const quotesOrPrice = quoteString;
//NOW HERE I WILL BE CREATING A NODEMAILER TRANSPORTER 
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth:{
        user: 'njadusandiso@gmail.com',
        pass: 'Sandisonjadu2001',
    },
})

//EMAIL CONTENT 
const mailOptions = {
    from: 'njadusandiso@gmail.com',
    to  : email,
    subject: 'YOUR QUOTES FOR EMI-DEISGNS',
    text: quotesOrPrice,
};

//SENDING THE EMAIL     
transporter.sendMail(mailOptions, (error, info) => {
    if(error){
        console.log(error);
        res.status(500).json({success: false, message: 'Email sending Failed'})
    }else{
        console.log('Email sent: ' + info.response);
        res.json({success: true, message: 'Email sent successfully.'});
    }
});

});



//STARTING THE EXPRESS SERVER 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}..`)
})

