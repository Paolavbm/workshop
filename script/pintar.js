
export const pintar = async(card, element) => {
    const paises = await card;
    paises.forEach(pais => {
        const {id, url, nombre, capital, poblacion, region} = pais;
        element.innerHTML += ` 
        <div id="poncho" class="" style="width: 15rem;">
        
        <img src="${url}" class="card-img-top" alt="..."></a>
        <div class="card-body">
           <div class="maria">
          <h5 class="">${nombre}</h5>
           <h6 class= "d-inline-block">Capital:</h6> <p class="d-inline-block">${capital}</p> <br> 
           <h6 class= "d-inline-block">Población:</h6><p class="d-inline-block">${poblacion}</p> <br>
           <h6 class= "d-inline-block">Region:</h6><p class="d-inline-block">${region}</p><br>
           <button id='${id}' class='btn btn-outline-primary boton'>agregar al carrito</button>
        </div> 
        </div> </a>
      </div>  `
    })

    
}

