/*clase n1*/

/*variables - tipos de valores - devilmente tipado(tipado dinamico)*/
/* definicion de vairables: var let cons*/

let unNumero = prompt("ingresar 1 número entre 1 y 4: ")
let personaje = undefined

if ( unNumero >= 1 && unNumero <= 4){
    
    if (unNumero == 1){
        personaje = "Homero"
    } else if (unNumero == 2){
        personaje = "Marge"
    } else if (unNumero == 3){
        personaje = "Lisa"
    } else{
        personaje = "Bart"
    }
} else{
        alert("ERROR. Ingresó un número menor que 1 o mayor que 4")
    }

console.log(personaje)



//Ejecutar función en el evento CLICK

document.getElementById("btnOpen").addEventListener("click", openCloseMenu)

//Declaramos variables

let sideMenu = document.getElementById("menuSide")
let btnOpen = document.getElementById("btnOpen")
let body = document.getElementById("body")


//Evento para mostrar y ocultar menú

function openCloseMenu(){
    
    body.classList.toggle("bodyMove")
    sideMenu.classList.toggle("menuSideMove")
}

//Si el ancho de la página es menor a 759px, ocultará el menú al recargar la página...

if (window.innerWidth < 761){

    body.classList.add("bodyMove")
    sideMenu.classList.add("menuSideMove")
}

//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function(){

    if (window.innerWidth > 761){
        body.classList.remove("bodyMove")
        sideMenu.classList.remove("menuSideMove")
    }

    if (window.innerWidth < 761){
        body.classList.add("bodyMove")
        sideMenu.classList.add("menuSideMove")
    }
})