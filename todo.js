console.log('Hola mundo');


// let nombre = 'Gerardo';
// let apellido = 'Gonzalez';
// let edad = 30;

// console.log(nombre + ' ' + apellido + ' ' + edad);

// let num1 = parseInt(prompt('Ingresa un numero'));
// let num2 = parseInt(prompt('Ingresa otro numero'));
// alert(num1+num2);

// let nombr = prompt('Cual es tu nombre?');
// alert('Hola ' + nombr)


// let texto = prompt('Escriba el usuario para ingresar');
// console.log(texto);

// if(texto === 'admin'){
//     alert('Puedes pasar a la pagina');
// } else{
//     alert('No eres usuario de aqui, largo!!');
// }


// let miedad = parseInt(prompt('¿Cual es tu edad?'));

// if(miedad >= 18){

//     alert('Bienvenido a la pagina');
// }else{
//     alert('No eres mayor de edad');
// }

// let numUsuario = parseInt(prompt('Ingresa un muero del 1 al 10'));
// let names = prompt('como te llamas');

// console.log(parseInt(numUsuario));

// console.log(numUsuario + " Es: " + typeof numUsuario);
// console.log(names);


// if((numUsuario) <= 10){
//     console.log('Genial');
//     alert('Tu numero es: ' + numUsuario + ' y tu nombre es: ' + names);
// }else{
//     console.log('No genial');
// }



// let gustos = prompt(`
//     Eliga una opcion:
//     1. Ojitos Bonitos,
//     2. LLegamos a la disco,
//     3. Instant crush
// `);

// switch(gustos){
//     case "1":
//         alert('Que buena cancion elegiste, deberias dedicarla');
//         console.log('Que buena cancion elegiste');
//     break;

//     case "2":
//         alert("La cancion mas bellakosa del mundo");
//     break;

//     case "3":
//         alert("La cancion favorita de tu novio");
//     break;
//     default:
//         alert('Elige una opcion correcta')
//         console.log('Elige una opcion correcta');
// }


// let num = 0;

// while (num <= 10){
//     console.log(num)
//     num++;
    
// } 


function suma(numA,numB){
    let resultado;
    resultado = numA + numB;
    return resultado;
}

function imprimirNombre(nombre){
    console.log('Gerardo');

    return "Hola " + nombre;
}

console.log(imprimirNombre('Monica'));


console.log(suma(9,1));


// function getRandomInt(min,max){
//     return Math.floor(Math.random() * (10 - 1)) + 1;
// }
// console.log(getRandomInt)


// var x = Math.floor(Math.random()*20);

// console.log(x);


// let juegoAzar = Math.floor(Math.random() * (20 - 1)) +1;


// let usuario = parseInt(prompt('Ingresa un numero del 1 al 20 para adivinar'));
// console.log(juegoAzar);


// let vidas = 3;

// while (juegoAzar !== usuario && vidas > 0){
//     vidas--;
//     usuario = parseInt(prompt('Vuelve a intentarlo, tus vidas son: ' + vidas));
// }


// let adivina = 'revolucion';

// let ingresa = prompt('¿En que lugar estuvimos en nuestra primera cita?');

// let vida = 2;

// while(adivina !== ingresa && vida > 0){
//     vida--;
//     ingresa = prompt('Y segun sabes todo, piensale porque tus vidas son: ' + vida);
// }

// if(adivina === ingresa){
//     alert('!Bien, si te acordaste¡');
// }else{
//     alert('Me decepcionas mucho');
// }


// let OpcionUsuario = prompt(`
//     Elige una opcion para comer:
//     1- Sopa maruchan.
//     2- Tacos de pastor y bistek.
//     3- Nada jajaj
//     4- Sandwich de jamon y quso.
// `);

// switch (OpcionUsuario) {
//     case "1":
//         alert('Que bien, sopa marcuchan');
//         break;
//     case "2":
//         alert('Desde cuando tengo ganas de unos tacos al pastor');
//         break;
//     case "3":
//         alert('No comemos nada y punto');
//         break;
//     case "4":
//         alert('! Con un licuado de chocolate uhmmm');
//         break;
//     default:
//         alert('Elige algo pór favor me estoy muriendo');
//     break;
       
// }


// let num2 = 1;

// while (num2 <= 10){
//     console.log(num2);
//     num2++;
// }
// console.log('Fin 2 del ciclo y: ' + num2)


//arrays // arreglos

// let frutas = ['fresa', 'manzana', 'piña', 'sandia', 'platano', 'uvas'];
// for(let fruta of frutas){
//     console.log(fruta);
//     console.log('esta son las frutas')
// }

let verduras = ['limon','lechuga', 'tomate','papa'];

// for( let i = 0; i < verduras.length; verduras++){
//     console.log(verduras[i]);
// }

for(let verdura of verduras){
    console.log(verdura);
}



// console.log('esta es tu fruta ' + frutas[1]);

// console.log(frutas.length); // mide la cantidad de datos en el array


//un bucle con for y arrays


// for of bucle



saludar();

function saludar(){
    console.log('Hola');
}


function saludar2(nombre){
    console.log('Bienvenido! ' + nombre);
}
saludar2('Ignacio');


// function sumar(n1,n2){
//     return parseInt(n1) + parseInt(n2);
// }

// let numeroUno = prompt('Ingresa un numero');
// let numeroDos = prompt('Ingresa otro numero');
// let resultado = sumar(numeroUno, numeroDos);
// alert('La suma es: ' + resultado);


// for (let i =0; i < 10; i++){
//     console.log(i);
// }


//interpolacion

let nombre = 'Gerardo';
let estado = true;
let edad = false;


//opcion 1
console.log("\nBienvenido: \n" + nombre + "\n");

//opcion 2
console.log(`Bienvenido: ${nombre}`); /* interpolacion de cadenas */

console.log(`
    Bienvenido:
    ${nombre}
`);

// ? Operador ternario significa que es una condicion 

console.log(`
    ${estado ? 'Bienvenido' : 'Adios!'} ${nombre}
`);

console.log(`
    ${edad ? 'Eres mayor de edad' : 'No eres mayor de edad'}

`);

let alumno = 'Jefte';
let calificacion = true;

console.log(`
    ${calificacion ? 'Aprobado' : 'Reprobado'} ${alumno}
`);


let estad = true;
// estad = false;
// console.log(estad);

var estado1 = true;
if (estado1) {
    var esatdo1 = false;
}

console.log(estado1);


// arreglos 2

const fruta = ['sandia', 'Melon','sandia', 'Melon','sandia', 'Melon'];
// fruta.push('manzana');
// fruta.push('limon');
fruta.pop();
fruta.unshift('Esto se agrego al incio')
fruta.shift();
// for(let frutas of fruta){

//     console.log(frutas);
// }


for(let i = 0; i < fruta.length; i++){
    console.log(fruta[i]);
}


// const productos = [];

// const cubrebocas = prompt('Ingresa un tipo de cubrebocas para agregar al carrito');

// productos.push(cubrebocas);

// console.log(cubrebocas);

// while(confirm('¿Quieres agregar mas cubrebocas?')){
//     const cubrebocas = prompt('Cual otro quieres');
//     productos.push(cubrebocas);
// }

// console.log('Compraste de fruta: ' + productos);
// for (const producto of productos) {
//     console.log(producto);
// }
function numeroAleatorio(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(numeroAleatorio(1,5));


function sumar(){
    const formu = document.getElementById('formu');
    let num1 = formu['sumar'];
    let num2 = formu['restar'];
    let resultado = parseInt(num1.value) + parseInt(num2.value);
    console.log(resultado);
    document.getElementById('resultado').innerHTML = resultado; 

}

function restar(){
    const formu = document.getElementById('formu');
    let num1 = formu['sumar'];
    let num2 = formu['restar'];
    let resultado = parseInt(num1.value) - parseInt(num2.value);
    console.log(resultado);
    document.getElementById('resultado').innerHTML = resultado; 
}

function multiplicacion(){
    const formu = document.getElementById('formu');
    let num1 = formu['sumar'];
    let num2 = formu['restar'];
    let resultado = parseInt(num1.value) * parseInt(num2.value);
    console.log(resultado);
    document.getElementById('resultado').innerHTML = resultado; 
}


function division(){
    const formu = document.getElementById('formu');
    let num1 = formu['sumar'];
    let num2 = formu['restar'];
    let resultado = parseInt(num1.value) / parseInt(num2.value);
    console.log(resultado);
    document.getElementById('resultado').innerHTML = resultado; 
}