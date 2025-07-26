const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const app = express();
const port = 3000;

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

if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Entregamos servicio-pendiente.html estático
app.get('/servicio-pendiente.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'servicio-pendiente.html'));
});

app.post('/enviar', upload.single('archivo'), (req, res) => {
  const { nombre, servicio, direccion, comentario } = req.body;
  const archivo = req.file ? `/uploads/${req.file.filename}` : null;

  // Creamos el objeto con los datos que querés mostrar
  const datosServicio = {
    nombre: servicio || nombre || "Sin nombre",
    telefono: "123-456-7890", // ejemplo fijo, cambialo según tus datos
    ubicacion: direccion || "Sin dirección",
    horarios: "Lun a Vie 9:00 a 18:00", // ejemplo fijo
    activo: true,
    foto: archivo || "../imagen/image (1).png"
  };

  // En vez de guardar en un archivo JSON, le mandamos al navegador
  // una página que guardará estos datos en localStorage y redirigirá a servicio-pendiente.html

  res.send(`
    <html>
      <head><title>Redirigiendo...</title></head>
      <body>
        <script>
          localStorage.setItem('servicioSeleccionado', JSON.stringify(${JSON.stringify(datosServicio)}));
          window.location.href = '/servicio-pendiente.html';
        </script>
      </body>
    </html>
  `);
});

app.listen(port, () => {
console.log(`Servidor corriendo en http://localhost:${port}`);})

