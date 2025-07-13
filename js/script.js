
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


const servicios = [
  { rubro: "Albañilería general", nombre: "JUAN ORTEGA", telefono: "3434660703", ubicacion: "Francisco Beiro 1356", horarios: "Lunes a viernes de 8 hs a 18 hs", activo: true ,foto: "../imagen/tio-juan.jpg"},
  { rubro: "Armado de muebles", nombre: "IDL MUEBLES A MEDIDA", telefono: "3434637000", ubicacion: "O`Brien 1150", horarios: "Lunes a viernes de 8 a 20 hs", activo: true ,foto:"../imagen/chiquito.jpg" },
  { rubro: "Calefacción e instalación de estufas", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: false },
  { rubro: "Carpintería a medida", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: false },
  { rubro: "Cadete", nombre: "ALEJANDRO CADETE", telefono: "3435084685", ubicacion: "", horarios: "Lunes a viernes de 8 a 20 hs", activo: true },
  { rubro: "Cerrajero", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: true },
  { rubro: "Colocación de cerámicos y porcelanatos", nombre: "JUAN ORTEGA", telefono: "3434660703", ubicacion: "Francisco Beiro 1356", horarios: "lunes a viernes de 8 hs a 18 hs", activo: true ,foto: "../imagen/tio-juan.jpg"},
  { rubro: "Colocación de durlock", nombre: "Maxi Servicios", telefono: "3434725043", ubicacion: "", horarios: "Lunes a viernes de 8 a 18 hs", activo: true },
  { rubro: "Colocación de pisos flotantes", nombre: "Maxi Servicios", telefono: "3434725043", ubicacion: "", horarios: "Lunes a viernes de 8 a 18 hs", activo: true },
  { rubro: "Decoración de interiores", nombre: "Gusi Romero", telefono: "3434611001", ubicacion: "", horarios: "", activo: true ,foto: "../imagen/tio-juan.jpg" },
  { rubro: "Desinfección y control de plagas", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: false },
  { rubro: "Electricista domiciliario", nombre: "Luisi z", telefono: "3434696445", ubicacion: "", horarios: "", activo: true },
  { rubro: "Gasista", nombre: "Carlos Gas", telefono: "3434600138", ubicacion: "", horarios: "", activo: true },
  { rubro: "Herrero", nombre: "La Fabrica Herreria", telefono: "3436128805", ubicacion: "Banda Oriental 407", horarios: "", activo: true ,foto:"../imagen/lafabrica.jpg" },
  { rubro: "Instalación de aires acondicionados", nombre: "Frioservicios", telefono: "3435196962", ubicacion: "Félix de azara 170", horarios: "", activo: true,foto:"../imagen/anibal.jpg" },
  { rubro: "Instalación de cámaras de seguridad", nombre: "Lautaro Misericordia", telefono: "3435192354", ubicacion: "Parana 16", horarios: "Lunes a viernes de 15 a 22 hs", activo: true },
  { rubro: "Instalación de porteros eléctricos", nombre: "Lautaro Misericordia", telefono: "3435192354", ubicacion: "", horarios: "Lunes a viernes de 15 a 22 hs", activo: true },
  { rubro: "Jardinero y mantenimiento de parques", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: false },
  { rubro: "Limpieza de tanques de agua", nombre: "Diego Tanques de Agua", telefono: "3434471298", ubicacion: "Crespo y Churruarin", horarios: "Lunes a viernes de 8 a 16 hs ", activo: true},
  { rubro: "Limpieza", nombre: "Esteban Marichal Oficial", telefono: "3434168687", ubicacion: "", horarios: "", activo: true },
  { rubro: "Mantenimiento de piletas", nombre: "Lagoon Picinas", telefono: "3425116604", ubicacion: "Parque Ind. Crespo", horarios: "Lunes a viernes de 8 a 16 hs ", activo: true },
  { rubro: "Montaje de muebles de cocina", nombre: "IDL MUEBLES A MEDIDA", telefono: "3434637000", ubicacion: "O`Brien 1150", horarios: "Lunes a viernes de 8 a 20 hs", activo: true ,foto:"../imagen/chiquito.jpg" },
  { rubro: "Pintura de interiores y exteriores", nombre: "Pintor Alejandro", telefono: "3434151271", ubicacion: "", horarios: "", activo: true },
  { rubro: "Plomería urgente y reparaciones", nombre: "Ramiro Boutet", telefono: "3434402905", ubicacion: "", horarios: "24hs", activo: true ,foto: "../imagen/plomero.jpg"},
  { rubro: "Reparación de calefones y termotanques", nombre: "Lautaro Misericordia", telefono: "3435192354", ubicacion: "Parana 16", horarios: "Lunes a viernes de 15 a 22 hs", activo: true ,foto:"../imagen/lauty.jpg"},
  { rubro: "Reparación de electrodomésticos", nombre: "Lautaro Misericordia", telefono: "3435192354", ubicacion: "Parana 16", horarios: "Lunes a viernes de 15 a 22 hs", activo: true ,foto:"../imagen/lauty.jpg" },
  { rubro: "Revestimiento en piedra",nombre: "Maxi Servicios", telefono: "3434725043", ubicacion: "", horarios: "Lunes a viernes de 8 a 18 hs", activo: true },
  { rubro: "Refrigeracion y aires acondicionados",nombre: "Frioservicios", telefono: "3435196962", ubicacion: "Félix de azara 170", horarios: "Lunes a viernes de 8 a 20 hs", activo: true,foto:"../imagen/anibal.jpg" },
  { rubro: "Servicio técnico para computadoras", nombre: "REPARACION ALE", telefono: "3435084685", ubicacion: "", horarios: "Lunes a viernes de 8 a 20 hs", activo: true },
  { rubro: "Tapicería de sillas y sillones", nombre: "Sebastián Revert", telefono: "3436453291", ubicacion: "", horarios: "", activo: true },
  { rubro: "Trabajos de altura con andamios", nombre: "", telefono: "", ubicacion: "", horarios: "", activo: false },
  { rubro: "Vidriería y colocación de cristales", nombre: "CB vidriería", telefono: "3434670634", ubicacion: "", horarios: "Lunes a viernes de 8 a 20 hs", activo: true },
  { rubro: "Yesería y revestimientos", nombre: "Maxi Servicios", telefono: "3434725043", ubicacion: "", horarios: "Lunes a viernes de 8 a 18 hs", activo: true },
  { rubro: "Zapatero", nombre: "Taller de Calzados Vera", telefono: "3434577939", ubicacion: "Ramirez 1970", horarios: "Lunes a viernes de 9  A 17 hs", activo: true , foto:"../imagen/tarjeta.jpg" }
];











