// Vamos a trabajar pasando información al Storage.
// De esta manera vamos a poder consumir en un html algo que haya guardado otro.
// 👉 Para eso debemos agregar al principio de la función [5] en script 'Clase-13' la siguiente línea:
//     localStorage.setItem('user', JSON.stringify(estadoUsuario));

/* -------------------------------------------------------------------------- */
/*           [6] FUNCION: Escuchamos el evento de carga de la página          */
/* -------------------------------------------------------------------------- */
window.addEventListener("load", () => { 
    const usuario = recuperarDataDelStorage()

    renderizarElementos(usuario)
})

/* -------------------------------------------------------------------------- */
/*                 [7] FUNCION: Recuperar la info del storage                 */
/* -------------------------------------------------------------------------- */
function recuperarDataDelStorage() {
    // buscamos la data almacenada en nuestro bolsillo (localStorage)
    //buscar los datos del usuario
    const jsonDeUsuario = localStorage.getItem("user")
   // console.log(jsonDeUsuario)
    // necesito transformar esa info de datosUsuario para que sea legible por JS
    const datosParseados = JSON.parse(jsonDeUsuario)
    //hacerlo en una sola linea, incluyendo la lines 21 y 24
    //const datosParseados = JSON.parse(localStorage.getItem("user"))

    console.log(datosParseados)

    return datosParseados;
    
}

/* -------------------------------------------------------------------------- */
/*                [8] FUNCION: Renderizamos la info en pantalla               */
/* -------------------------------------------------------------------------- */
function renderizarElementos(objetoJS) {

    //mostar los ¡datos capturados en  la pagina usuiario, primero se capura donde quiero mostar
    const email = document.querySelector("#email")
    const perfil = document.querySelector("#perfil")

    //pintar (renderizar) las propiedades en pantalla
    email.textContent = objetoJS.email;
    perfil.innerText = objetoJS.rol;


}


/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                     [9] FUNCION: Boton de cerrar sesion                    */
/* -------------------------------------------------------------------------- */
// Ahora vamos a crear elementos en el DOM dinamicamente y le asignaremos a esos elementos la escucha de eventos.
// ☝ La funcion debe ser ejecutada al final del evento Load.
// La idea es crear un boton para cerrar sesión. Entonce necesitamos cumplir los siguientes puntos:
// 1- Crear un elemento <button>
// 2- Que ese botón tenga el texto "Cerrar sesión"
// 3- El boton tiene que tener ciertos estilos:
//     - padding arriba y abajo de 5px y a los costados 20px
//     - color de fondo rojo con transparencia: rgba(255,0,0,0.2)
//     - color de letra rojo
//     - margenes a todos los lados de 20px
//     - ningún borde
//     - cursor de tipo pointer
// 4- Tenemos que agregar el botón en pantalla, adentro del div con la clase 'user', al final del mismo
// 5- El botón debe reaccionar cuando se le hace click
// 6- Mediante el click debe aparecer un cuadro de confirmación que pregunte: "¿Seguro desea cerrar sesión?"
// 7- Si el usuario acepta debe borrar todo el storage y redirigirlo a la pantalla de Login.

function botonCerrarSesion() {
    //    👇 desarrollar la función
    
    const botonCerrar = document.createElement("button");
    
    botonCerrar.textContent = "Cerrar sesión";
    botonCerrar.style = "padding: 5px 20px; background-color: rgba(255,0,0,0.2); color:red; margin: 20px; border: none; cursor: pointer"
    const divUser = document.querySelector('.user');
    divUser.appendChild(botonCerrar);

    botonCerrar.addEventListener("click" , () => {
        let confirmacion = confirm("¿Desea cerrar sesión?")

        if(confirmacion){
            localStorage.clear();
            location.replace('./index.html')
        }
        
    });

    
}

// Llamamos a la función para que se ejecute
botonCerrarSesion();