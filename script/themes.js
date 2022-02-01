export const se = (tema) => {
    const fondo = document.getElementById("fondo")
    const banner = document.getElementById("banner")
    const temas = document.getElementById("rango")
    const busqueda = document.getElementById("busqueda")
    const input= document.getElementById('search')
    const cartas = document.getElementById("poncho")
    const select = document.getElementById("select")
    

if(tema === 1){
    fondo.setAttribute("class", "f1")
    banner.setAttribute("class", "b1")
    input.setAttribute("class", "b1")
    temas.setAttribute("class", "to1")
    busqueda.setAttribute("class", "bus1")
    cartas.setAttribute("class", "c1")
    select.setAttribute("class","s1")
    

}else{
    fondo.setAttribute("class", "f2")
    banner.setAttribute("class", "b2")
    temas.setAttribute("class", "t2")
    busqueda.setAttribute("class", "bus2")
    cartas.setAttribute("class", "c2")
    select.setAttribute("class","s2")
}
}

