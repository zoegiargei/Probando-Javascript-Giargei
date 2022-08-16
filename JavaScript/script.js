// /*clase n1*/

// /*variables - tipos de valores - devilmente tipado(tipado dinamico)*/
// /* definicion de vairables: var let cons*/

// /*Desafío entregable 1*/

// /*Ejersicio 1*/
// let unNumero, personaje;

// do{
//     alert("Ejersicio de los SIMPSON: para asignarle un personaje debe ingresar un número, el resultado se mostrará en consola.")
//     unNumero = parseInt(prompt("ingresar un número entre 1 y 4: "))
// } while (isNaN(unNumero) || unNumero > 4 || unNumero < 1)

// if(unNumero == 1){
//     personaje = "Homero";
// } else if(unNumero == 2){
//     personaje = "Marge";
// } else if(unNumero == 3){
//     personaje = "Lisa";
// } else{
//     personaje = "Bart";
// }

// console.log("Ejersicio de asignación de personaje de los Simpson")
// console.log("El personaje es: " + personaje)


// /*Ejersicio 2*/
// let num;
// let factorial = 1;

// do{
//     alert("Factorial de un número n!")
//     num = parseInt(prompt("Ingrese el número al que le quiere aplicar factorial, el resultado se mostrará en consola: "))
// } while(isNaN(num))

// for (let i=1; i < num+1; i++){

//     factorial *= i;
// }

// console.log(" ");
// console.log("Ejersicio de Factorial de un número n!");
// console.log("El factorial de "+ num.toString() + " es: " + factorial.toString());



// alert("Colores del arcoiris...");
// colorArc = prompt("Ingrese un color: ").toLowerCase();

// console.log("");
// console.log("Ejersicio de los colores del Arcoiris");

// if (colorArc == "rojo"){
//     console.log("El color SI está en el arcoiris");
// } else if(colorArc == "naranja"){
//     console.log("El color SI está en el arcoiris");
// } else if(colorArc == "amarillo"){
//     console.log("El color SI está en el arcoiris");
// } else if(colorArc == "verde"){
//     console.log("El color SI está en el arcoiris");
// } else if(colorArc == "azul"){
//     console.log("El color SI está en el arcoiris");
// } else if(colorArc == "violeta"){
//     console.log("El color SI está en el arcoiris");
// } else{
//     console.log("Ese color NO está en el arcoiris");
// }


// /*Ejersicio 3*/
// let producto;

// alert("Crear lista de compras - La lista se verá en la consola - Para finalizar la lista de compras ingrese la palabra 'fin' ...");
// producto = prompt("Ingrese producto que necesita en la lista de compras o ingrese la palabra 'fin' : ").toLowerCase()

// console.log("");
// console.log("-LISTA DE COMPRAS-")
// while(producto != "fin"){

//     if (producto != undefined){
//         console.log("-" + producto);
//     }

//     producto = prompt("Ingrese otro producto que necesita en la lista de compras o ingrese la palabra 'fin' : ").toLowerCase()
// }






//Ejecutar función en el evento CLICK

document.getElementById("btnOpen").addEventListener("click", openCloseMenu)

//Declaramos variables

let sideMenu = document.getElementById("menuSide");
let btnOpen = document.getElementById("btnOpen");
let body = document.getElementById("body");


//Evento para mostrar y ocultar menú

function openCloseMenu(){
    
    body.classList.toggle("bodyMove");
    sideMenu.classList.toggle("menuSideMove");
}

//Si el ancho de la página es menor a 759px, ocultará el menú al recargar la página...

if (window.innerWidth < 761){

    body.classList.add("bodyMove");
    sideMenu.classList.add("menuSideMove");
}

//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function(){

    if (window.innerWidth > 761){
        body.classList.remove("bodyMove");
        sideMenu.classList.remove("menuSideMove");
    }

    if (window.innerWidth < 761){
        body.classList.add("bodyMove");
        sideMenu.classList.add("menuSideMove");
    }
})





//AJAX
fetch("https://criptoya.com/api/dolar")
.then(response => response.json())
.then(({solidario, blue}) => {

    let dolarSolidario = document.getElementById(`solidario`)
    let dolarBlue = document.getElementById(`blue`)

    dolarSolidario.innerHTML = ``
    dolarSolidario.innerHTML += `
    Solidario: ${solidario}`

    dolarBlue.innerHTML = ``
    dolarBlue.innerHTML += `
    Blue: ${blue}`
})

//conversor de moneda
let myHeaders = new Headers();
myHeaders.append("apikey", "xTSp083De3jdN6gDfkoYCXuO6HgBh0xQ");

let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

//
fetch("https://api.apilayer.com/currency_data/live?source=ARS&currencies=USD,EUR,AUD", requestOptions)
.then(response => response.json())
.then(result => {

    let eur = document.querySelector(`#EUR`)
    eur.dataset.cambio = result.quotes.ARSEUR
    
    let usd = document.querySelector(`#USD`)
    usd.dataset.cambio = result.quotes.ARSUSD
    
    let aud = document.querySelector(`#AUD`)
    aud.dataset.cambio = result.quotes.ARSAUD

    console.log(result.quotes.ARSAUD)
    console.log(result.quotes.ARSEUR)
    console.log(result.quotes.ARSUSD)

    inputs.forEach(input => {
        input.value = input.dataset.cambio
    })
})
.catch(error => console.error(error))
//

let inputs = document.querySelectorAll(`.valor`)

inputs.forEach((input)=>{
    input.addEventListener(`change`, () => {
        valorModificado(input)
    })
})

function valorModificado(input){
    let factor = (input.value / input.dataset.cambio)

    inputs.forEach((input) => {
        input.value = (input.dataset.cambio * factor).toFixed(3)
    })
}