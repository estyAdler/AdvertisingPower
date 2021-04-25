let nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    /* host: 'smtp.gmail.com',
    port: 465,
    secure: true, */
    service: 'gmail',
    auth: {
        user: 'advpower11',
        pass: 'advp7720'
    }
});


var getData = async (to, status) => {
    var To = 'pro6709601@gmail.com';
    var Html = '<h1 style="color:green">שלום</h1><p>מודעתך נבדקה על ידי המערכת</p> <p>ואושרה לפרסום</p><p>להכנסת מודעה נוספת כנסו לאתר שלנו בכתובת:"http://localhost:4200/"</p>';
    To = to;
    if (status == -1)
        Html = '<h1 style="color:red">שלום</h1><p>מודעתך נבדקה על ידי המערכת</p> <p>ולצערנו המודעה אינה תואמת</p><p>לשנוי המודעה כנסו לאתר שלנו בכתובת:"http://localhost:4200/"</p>';

    var mailOptions = {
        from: 'advpower11@gmail.com',
        to: To,
        subject: 'תגובת המערכת למודעה שנשלחה',
        //text: 'That was easy!',
        html: Html
    };
    await transporter.sendMail(mailOptions, function (error, info) {

        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}



module.exports = { getData }