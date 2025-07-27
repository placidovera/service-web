const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use('/page', express.static(path.join(__dirname, 'page')));

if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/servicio-pendiente.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'page', 'servicio-pendiente.html'));
});

app.post('/enviar', (req, res) => {
  upload.single('archivo')(req, res, function(err) {
    if (err) {
      console.error('❌ Error en multer:', err);
      return res.status(500).send('Error al subir archivo');
    }

    console.log("Usuario:", process.env.CORREO_USUARIO);

    // 🔧 Esta parte debe ir adentro del callback (ACÁ estaba el error)
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: process.env.CORREO_USUARIO,
        pass: process.env.CORREO_CLAVE
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: process.env.CORREO_USUARIO,
      to: process.env.CORREO_USUARIO,
      subject: 'Nuevo formulario recibido',
      text: `Datos del formulario:\n${JSON.stringify(req.body, null, 2)}`,
      attachments: req.file ? [
        {
          filename: req.file.originalname,
          path: req.file.path
        }
      ] : []
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error('❌ Error al enviar el email:', error);
        return res.status(500).send('Error al enviar email');
      } else {
        console.log('✅ Email enviado:', info.response);
        res.send('✔️ Archivo procesado y email enviado');
      }
    });
  });
});
