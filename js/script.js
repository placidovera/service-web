
// variables barra lateral
let servicios = []; 
const cloud = document.getElementById("cloud")                     //icono nube abre y cierra la barra lateral
const  barraLateral = document.querySelector(".barra-lateral")
const  publicidad = document.querySelector(".publicidad")          //publicidad debajo de la barra lateral
const  spans = document.querySelectorAll("span")
const  palanca = document.querySelector(".swich")                 
const  circulo = document.querySelector(".circulo")

//perilla dark mode
palanca.addEventListener("click",()=>{
 let body = document.body
 body.classList.toggle('dark-mode')
 circulo.classList.toggle('prendido')
})
// minimiza la barra lateral al tocar la nube
cloud.addEventListener("click",()=>{
  barraLateral.classList.toggle("mini-barra-lateral")
  spans.forEach((span)=>{
  span.classList.toggle("oculto")//oculta el span con la nube
  })
   //espacio debajo de la barra para publicidad
  publicidad.classList.toggle("div-oculto")
})
  
// busca en los <li> y filtra el texto segun coincide a .listaResultados

const input = document.getElementById("campoBusqueda");

function procesarBusqueda() {
  const texto = input.value.toLowerCase();
  const resultados = document.querySelectorAll(".listaResultados li");
  let hayCoincidencias = false;
  //si hay coincidecia muestra los li, si no los esconde
  resultados.forEach(li => {
    const coincide = li.textContent.toLowerCase().includes(texto);
    li.style.display = coincide ? "list-item" : "none";
    li.classList.toggle("visible", coincide);

    if (coincide) {
      hayCoincidencias = true;

      // Comportamiento al hacer click
      li.onclick = () => {
        const nombreSeleccionado = li.textContent.trim().toLowerCase();
        input.value = li.textContent;

        resultados.forEach(item => item.style.display = "none");

        const servicioSeleccionado = servicios.find(
          s => s.rubro.toLowerCase() === nombreSeleccionado
        );

        if (servicioSeleccionado) {
          localStorage.setItem("servicioSeleccionado", JSON.stringify(servicioSeleccionado));
          window.location.href = "page/servicioActivo0.html";
        }
      };
    }
  });

  // Opcional: mensaje si no hay coincidencias
  const mensaje = document.getElementById("mensajeSinResultados");
  if (mensaje) {
    mensaje.style.display = hayCoincidencias ? "none" : "block";
  }
}


// Actualizar al escribir
input.addEventListener("input", procesarBusqueda);

// Redirección con Enter
function confirmarBusqueda() {
  const valor = input.value.trim().toLowerCase();
  const servicioSeleccionado = servicios.find(
    s => s.rubro.toLowerCase() === valor
  );

  if (servicioSeleccionado) {
    localStorage.setItem("servicioSeleccionado", JSON.stringify(servicioSeleccionado));
    window.location.href = "page/servicioActivo0.html";
  } else {
  input.value = "Servicio no encontrado";
  }
}
function limpiarCampos() {
  // Limpiar el input de texto con id campoBusqueda
  const campoBusqueda = document.getElementById("campoBusqueda");
  if (campoBusqueda) campoBusqueda.value = "";
}
  const botonSalir = document.getElementById("miBoton");

  if (botonSalir) {
    botonSalir.addEventListener("click", () => {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "Vas a limpiar la página.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, limpiar",
        cancelButtonText: "No, quedarme",
          reverseButtons: true,
  customClass: {
    popup: 'swal-tamaño-grande'
  }
      }).then((result) => {
       if (result.isConfirmed) {
         limpiarCampos();
} else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Cancelado", "Seguís en la página actual", "info");
        }
      });
    });
  };
fetch('./servicios.json')
  .then(response => response.json())
  .then(data => {
    servicios = data;
  })
  .catch(error => console.error('Error al cargar servicios:', error));












