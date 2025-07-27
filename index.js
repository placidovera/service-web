const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

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

    console.log('📁 req.file:', req.file);
    console.log('📝 req.body:', req.body);
    res.send('✔️ Archivo procesado');
  });
});
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
