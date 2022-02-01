let modal = document.querySelector('#contenedorModal')
let data = []
export const mostrarModal = async (id) => {
    
    const endpoint = `http://localhost:4000/paises/${id}`

    let res = await fetch(endpoint);
     data = await res.json();
    
    modal.innerHTML = `
   <div class="modal-header">
 <h5 class="modal-title" id="exampleModalLabel">${data.nombre}</h5>
 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class='row g-0'>
 <div class='col-md-4'>
   <img class='w-100 my-5 ms-4' src="${data.imagen}" alt="${data.nombre}">
 </div>
 <div class='col-md-8'>
   <div class="modal-body my-3 mx-2">
     
     <h3> $${data.presidente}</h3>
     <p>${data.plato}</p>
       <center>
         <button id='${data.id}' class='btn btn-outline-primary boton'>agregar al carrito</button>
       </center>
     </div>
 </div>
</div> 
 `
}

