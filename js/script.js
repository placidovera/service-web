
// variables barra lateral
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
// minimiza la barra lateral
cloud.addEventListener("click",()=>{
barraLateral.classList.toggle("mini-barra-lateral")
//espacio debajo de la barra para publicidad
publicidad.classList.toggle("div-oculto")
})
  
// busca en los <li> y filtra el texto segun coincide a .listaResultados

const input = document.getElementById("campoBusqueda");

function procesarBusqueda() {
  const texto = input.value.toLowerCase();
  const resultados = document.querySelectorAll(".listaResultados li");
  let hayCoincidencias = false;

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

const servicios = [
  { rubro: "Albañilería general", nombre: "Tio Juan", telefono: "3434660703", ubicacion: "Francisco", horarios: "", activo: true },
  { rubro: "Armado de muebles", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Calefacción e instalación de estufas", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Carpintería a medida", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Cerrajero", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Colocación de cerámicos y porcelanatos", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Colocación de durlock", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Colocación de pisos flotantes", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Decoración de interiores", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Desinfección y control de plagas", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Electricista domiciliario", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Fumigación domiciliaria", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Gasista matriculado", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Herrero para rejas y portones", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Instalación de aires acondicionados", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Instalación de cámaras de seguridad", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Instalación de porteros eléctricos", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Jardinero y mantenimiento de parques", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Limpieza de tanques de agua", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Limpieza post obra", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Mantenimiento de piletas", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Montaje de muebles de cocina", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Pintura de interiores y exteriores", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Plomería urgente y reparaciones", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Pulido de autos", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Reparación de calefones y termotanques", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Reparación de electrodomésticos", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Reparación de persianas", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Revestimiento en piedra o madera", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Refrigeracion y aires acondicionados", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Servicio técnico para computadoras", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Soldadura y estructuras metálicas", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Tapicería de sillas y sillones", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Techista y reparación de goteras", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Trabajos de altura con andamios", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Vidriería y colocación de cristales", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Yesería y revestimientos", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Zapatero", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true }
];











