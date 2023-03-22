require('dotenv').config()
const nodemailer = require("nodemailer");

// need to receive from values
{ eventName }
{ quantity }
{ mail }
// from DB
{ codes }

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const createTickets = (quantity, codes) => {
  // map por cantidad
}

const mailOptions = {
  from: process.env.EMAIL,
  to: { emailfrominputForm },
  subject: `Aquí tienes tus tickets para ${eventFromInput}`,
  text:
    // repetir las veces que sea necesario
    `ticket ${x}: ${code}`,
  html: (
    <div>
      <h1>Your invited to {eventName}</h1>
      <p>`Here you have {quantity} tickets</p>
      {/* Generate multiple times if necessary */}
      {/* iteration */}
      <h3>`Ticket {1}</h3>
      <img src={`https://${X}.chart.googleapis.com/chart?`} alt={code} />
      <hr />
      <h3>`Ticket {1}</h3>
      <img src={`https://${X}.chart.googleapis.com/chart?`} alt={code} />
      <hr />
      <h3>`Ticket {1}</h3>
      <img src={`https://${X}.chart.googleapis.com/chart?`} alt={code} />
      <hr />
    </div>
  ),
};


transporter.sendMail(mailOptions, function(err, info) {
  if (err) {
    console.log(err)
  } else {
    console.log('Email sent: ' + info.response)
  }
})