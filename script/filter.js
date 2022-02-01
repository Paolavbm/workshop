export const filter = async (data, card) => {

  const contAsia = document.getElementById('contAsia');
  const contAmerica = document.getElementById('contAmerica')
  const contEuropa = document.getElementById('contEuropa')

  const paises = await data;
  const select = document.getElementById('select').value

  if (select === "asia") {
    contAsia.innerHTML = '';
    card.style.display = 'none'
    contAmerica.style.display = 'none'
    contEuropa.style.display = 'none'
    contAsia.style.display = 'block'

    let asia = paises.filter(paises => paises.region === 'Asia');
    asia.forEach(pais => {
      let { id, url, nombre, capital, poblacion, region } = pais;
      contAsia.innerHTML += `<div id="poncho" class="" style="width: 15rem;">
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
    })
  } else if (select === "america") {
    contAmerica.innerHTML = '';
    card.style.display = 'none'
    contAmerica.style.display = 'block'
    contEuropa.style.display = 'none'
    contAsia.style.display = 'none'

    let america = paises.filter(paises => paises.region === 'America');
    america.forEach(pais => {
      let { id, url, nombre, capital, poblacion, region } = pais;
      contAmerica.innerHTML += `<div id="poncho" class="" style="width: 15rem;">
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
    })
  } else if (select === "europa"){
    let europa = paises.filter(paises => paises.region === 'Europa');

    contEuropa.innerHTML = '';
    card.style.display = 'none'
    contAmerica.style.display = 'none'
    contEuropa.style.display = 'block'
    contAsia.style.display = 'none'

    europa.forEach(pais => {
      let { id, url, nombre, capital, poblacion, region } = pais;
      contEuropa.innerHTML += `<div id="poncho"  style="width: 15rem;">
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
    })
  }else{
    card.style.display = 'block'
    contAmerica.style.display = 'none'
    contEuropa.style.display = 'none'
    contAsia.style.display = 'none'
  }

}








