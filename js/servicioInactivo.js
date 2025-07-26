document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que se recargue la página

    // Obtener los campos
    const servicio = document.getElementById("servicio").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const comentario = document.getElementById("comentario").value.trim();
    const archivo = document.getElementById("archivo");

    // Validaciones
    if (!servicio || !nombre || !direccion) {
      alert("Por favor, completá todos los campos obligatorios.");
      return;
    }

    // Opcional: validar que el archivo sea una imagen
    if (archivo.files.length > 0) {
      const file = archivo.files[0];
      const validTypes = ["image/jpeg", "image/png", "image/webp"];
      if (!validTypes.includes(file.type)) {
        alert("El archivo debe ser una imagen (.jpg, .png o .webp)");
        return;
      }
    }

    // Crear el objeto a guardar
    const datos = {
      servicio,
      nombre,
      direccion,
      comentario,
      archivo: archivo.files.length > 0 ? archivo.files[0].name : null,
      fecha: new Date().toISOString()
    };

    // Guardar en localStorage
    let registros = JSON.parse(localStorage.getItem("servicios")) || [];
    registros.push(datos);
    localStorage.setItem("servicios", JSON.stringify(registros));

    // Mensaje de éxito
    alert("¡Formulario enviado y guardado correctamente!");

    // Limpiar el formulario
    form.reset();

    // Mostrar en consola para debug
    console.log("Guardado en localStorage:", datos);
  });
});
