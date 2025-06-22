const cloud = document.getElementById("cloud")
const  barraLateral = document.querySelector(".barra-lateral")
const  publicidad = document.querySelector(".publicidad")
const  spans = document.querySelectorAll("span")
const  palanca = document.querySelector(".swich")
const  circulo = document.querySelector(".circulo")
palanca.addEventListener("click",()=>{
let body = document.body
body.classList.toggle('dark-mode')
circulo.classList.toggle('prendido')
})

cloud.addEventListener("click",()=>{
barraLateral.classList.toggle("mini-barra-lateral")
publicidad.classList.toggle("div-oculto")
spans.forEach((span)=>{
    span.classList.toggle("oculto")
})
})
function buscarEnPagina() {
  const texto = document.getElementById('campoBusqueda').value.toLowerCase();
  const elementos = document.querySelectorAll('#listaResultados p');

  elementos.forEach(el => {
    const visible = el.textContent.toLowerCase().includes(texto);
    el.style.display = visible ? 'block' : 'none';
  });
}
const input = document.getElementById("campoBusqueda");

input.addEventListener("input", () => {
  const texto = input.value.toLowerCase();

  // Selecciona todos los <li> de todas las listas dentro de .listaResultados
  const resultados = document.querySelectorAll(".listaResultados li");

  resultados.forEach(li => {
    const coincide = li.textContent.toLowerCase().includes(texto);
    li.style.display = coincide ? "list-item" : "none";

    li.onclick = () => {
      input.value = li.textContent;
      resultados.forEach(item => item.style.display = "none");
    };
  });
});