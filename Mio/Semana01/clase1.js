/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */
function iniciarJuego() {
    //Saludas al visitante 
    alert("bienvenido al juego de piedra,papel o tijera de Front2")

    // guardar en una variable o consola
    const nombre = prompt("como te llamas?");
    alert("Hola estimado desarrollador " + nombre + " , mucha suerte")
    alert(`Hola estimado desarrollador ${nombre} ,mucha suerte`)

    console.log("----------------------");
    console.log("El nombre del jugador es ");
    console.log(nombre);
    console.log("----------------------");

    return nombre;
}


//Carol julieth Velez
function iniciarJuego2() {
   
    let nombre = prompt("como te llamas?");
  
    if(nombre.length >= 3 && typeof nombre === 'string'){
        alert(` ${nombre.toUpperCase()} bienvenido al juego`)
    }else{
        alert(`nombre ${nombre} es incorrecto, envia un nombre valido`)
        iniciarJuego2();
    }
    console.log("----------------------");
    console.log("El nombre del jugador es ");
    console.log(nombre);
    console.log("----------------------");

    return nombre;
}

//let usuario = iniciarJuego2();
console.log(usuario);
/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.


function iniciarJuego() {
    let ok = false;
    let soloLetras
    // suludamos al usuario
    alert("Bienvenido al piedra papel o tijera de Frontend II.");

    do {
        let nombre = prompt("Ingese su nombre por favor:").toUpperCase().trim()
        soloLetras = /^[a-zA-Z]+$/
        // guardamos en una variable en nombre ingresado
        // if (!isNaN(nombre) || nombre.length <= 3) {
        if (nombre.length < 3 || !soloLetras.test(nombre)) {

            alert("Tu nombre debe tener mas de 3 caracteres y no se permiten numeros");
            nombre = prompt("Ingese su nombre por favor:").toUpperCase()
            ok = true
        } else {
            ok = false
            alert("Gracias por jugar " + nombre + ". ¡Mucha suerte!");
            // mostramos los datos por consola
            console.log("----------------------------");
            console.log("El jugador es:")
            console.log(nombre);
            console.log("----------------------------");
            return nombre;
        }
    } while (ok == true)
}

