const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors')
const bodyParser = require("body-parser");
const app = express();
app.use(cors())
app.use(bodyParser.json());

var validateNum = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
var email
app.post('/send-email', (req, res) => {
  email = req.body.email;
  console.log(email)
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for TLS, false for SSL
    auth: {
      user: 'lamitvnviec@gmail.com',
      pass: 'cwac agtv qplz umrp'
    }
  });

  // const email = req.body?.email
  // console.log(req.body)
  // console.log(req.body?.email)
  // console.log(req.payload)
  const mailOptions = {
    from: 'lamitvnviec@gmail.com',
    to: email,
    subject: `Mã xác minh lamitVNviec`,
    text: `Mã của bạn là: ${validateNum}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.send('Error sending email: ' + error);
    } else {
        // Thực hiện hành động cần thiết
        // Ví dụ: Gửi email đến email được nhập
        console.log("Nhận được email: " + email);
        res.json("Cảm ơn bạn đã gửi email!");
    }
  });
});


app.post('/numValidate', (req, res) => {
  const inputValNum = req.body.valN;
  console.log(inputValNum)
 if(inputValNum == validateNum) {
  res.json("Xác thực thành công")
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for TLS, false for SSL
      auth: {
        user: 'lamitvnviec@gmail.com',
        pass: 'cwac agtv qplz umrp'
      }
    });
  
    // const email = req.body?.email
    // console.log(req.body)
    // console.log(req.body?.email)
    // console.log(req.payload)
    const mailOptions = {
      from: 'lamitvnviec@gmail.com',
      to: email,
      subject: `Bạn đã TRÚNG TUYỂN`,
      text: `Mức lương thử việc của bạn là 5 tỷ/ ngày.
            Mô tả công việc: đánh răng cá sấu, dạy cá mập bơi`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.send('Error sending email: ' + error);
      } else {
          // Thực hiện hành động cần thiết
          // Ví dụ: Gửi email đến email được nhập
          console.log("Nhận được email: " + email);
          res.json("Bạn đã xác thực");
      }
    });

 }else{
  res.status(401).json({ message: 'Xác thực thất bại' });
 }
});
app.listen(process.env.PORT || 3000, () => console.log('Server started on port 3000'));
