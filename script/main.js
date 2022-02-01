import urlData from "./url.js";
import {pintar} from './pintar.js'
import { filter } from "./filter.js";
import { mostrarModal } from "./moda.js";
import {se} from "./themes.js"

let select = document.getElementById('select');
let impreso = document.getElementById('impreso')
let boton = document.getElementById('boton')




//tema

const s = document.getElementById("rango")
s.addEventListener('click', () =>{
const tema = Number(document.getElementById("range").value)
se(tema);
})


//url
const url = 'http://localhost:4000/paises/';
const data = urlData(url);
const card = document.getElementById('contenedor-card')

document.addEventListener('DOMContentLoaded', () => {

    
    
    pintar(data, card);

})

select.addEventListener('change', (e) => {
   
   filter(data, card)
})

boton.addEventListener('click', async(e) => {
   e.preventDefault();
   const input = document.getElementById('search').value; 
   const resp = await fetch(url);
   const data = await resp.json()
   const buscar = data.find(find => find.nombre.toLocaleLowerCase() == input.toLocaleLowerCase())
   
   if (buscar !== undefined) {
       const {url, nombre, capital, poblacion, region} = buscar;
       impreso.innerHTML = '';
       card.style.display = 'none'
       impreso.innerHTML += `<div id="poncho" class="" style="width: 15rem;">
       <img src="${url}" class="card-img-top" alt="...">
       <div class="card-body">
          <div class="maria">
         <h5 class="">${nombre}</h5>
          <h6 class= "d-inline-block">Capital:</h6> <p class="d-inline-block">${capital}</p> <br> 
          <h6 class= "d-inline-block">Población:</h6><p class="d-inline-block">${poblacion}</p> <br>
          <h6 class= "d-inline-block">Region:</h6><p class="d-inline-block">${region}</p><br>
       </div> 
       </div>
     </div> `
   } else {
       alert('País no encontrado')
   }
})


card.addEventListener('click', async(e) => {
   const btnDetail = e.target.classList.contains('btn');
   const id = e.target.id;
   console.log(id)
    if (btnDetail) {
      const card = await urlData(url)
     const objeto = card.find(card => card.id === Number(id))
   
        mostrarModal(id, objeto)
    }
})


// ('click', async(e) => {

//    const btnDetail = e.target.classList.contains('btn-outline-dark');
//    const id = e.target.id;

//    if(btnDetail){
//         const lista = await getData(endpoint);
//         const objeto = lista.find(list => list.id === Number(id))
//         localStorage.setItem("Detail",JSON.stringify(objeto));
//         window.location.href = "detail.html"
//    }

   
