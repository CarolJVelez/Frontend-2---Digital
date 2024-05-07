// 🚩 Primero que nada vamos a enlazar el HTML con este nuevo script y a su vez
// vamos a comentar la linea que lo vincula con el script de la clase 11.
// La idea es desarrollar en este script las nuevas y mejoradas funcionalidades.

/* -------------------------------------------------------------------------- */
/*                       [4] FUNCION: Consulta a la API                       */
/* -------------------------------------------------------------------------- */
// En este caso vamos a consultar a un servidor del cual nos vamos a traer la data.
// Esta API tiene su documentación en: const boton = document.querySelector('button');
// Vamos a implementar el endpoint que nos devuelve comentarios para mostrarlos en pantalla.
function consultaApi(endpoint){
    
    
    fetch(endpoint)//es una promesa, y que ya esta preconfigurada para retornarme lo que tenga la API
    
        .then((respuestaJson) => {//funcion para obtener el contenido de la promesa
            //console.log(respuestaJson);//Respuesta un objeto json
            //en vez de utilizar JSON.parse(), las promesas tienen un metodo especifico que se encarga de traerme todo
            //y buscar un objeto literal con el cual pueda iterar
            //verificar eerores
            if(!respuestaJson.ok){
                //error en la solicitud
                console.log(respuestaJson.statusText);
                //mostrarError() 
                return Promise.reject(respuestaJson)
            }
            return respuestaJson.json()//traducir ese dato en la cosita resur y retorna todo

        })
        .then((datoJS) => {
            //console.log(datoJS)
            renderizarElementos(datoJS)
            boton.style.display = "none";
        })
        .catch(err => {
            console.error(err);
            alert('Ha ocurrido un error al obtener los datos de la API. Por favor, inténtalo de nuevo más tarde.');
        });
    
}


/* -------------------------------------------------------------------------- */
/*                      [5] FUNCION: Escuchamos el click                      */
/* -------------------------------------------------------------------------- */
// Vamos a reimplementar la escucha del click lanzar las nuevas funciones.
const boton = document.querySelector("button")
const endpoint = 'https://jsonplaceholder.typicode.com/commentsj';

boton.addEventListener("click", () =>{
    console.log("click para ver comentarios");
    consultaApi(endpoint)
    console.log("fin para ver comentarios");

})

/* -------------------------------------------------------------------------- */
/*                      [6] FUNCION: renderizar elementos                     */
/* -------------------------------------------------------------------------- */
// Acá vamos a reutilizar la función de renderizar renderizarElementos, implementando
// el .map() y .join() para obtener el resultado esperado.

function renderizarElementos(listado){
    //console.log(listado)

    const comentarios  = document.querySelector(".comentarios")
    const primerosDiezComentarios = listado.slice(0, 10);

    comentarios.innerHTML = ""
    
    comentarios.innerHTML = primerosDiezComentarios.map((comentario) => {
        return `<div class="comentario" id =${comentario.id} >
        <h4>${comentario.email}</h4>
        <p>${comentario.body}</p>
    </div>`
    }).join("")
    
   
    
}
/* ----------------------------- Mesa de trabajo ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                              Mejoras de código                             */
/* -------------------------------------------------------------------------- */
// En este caso no debemos desarrollar una nueva funcionalidad necesariamente. Aunque
// siempre que lo creas necesario va a estar bien modularizar en funciones el código.
// Queda a criterio del grupo generar o no nuevas funciones.
// En este caso deberan cumplir con nuevos requerimientos que necesita la aplicación.
// 1- En el caso de la consulta a la API, si la misma no es satisfactoria, deberá arrojar
// un error que se le muestre al usuario.
// 2- Para lograr ver el error podemos forzarlo modificando el endpoint incorrectamente,
// para detectar y arrojar el error deben implementar el bloque try().catch()
// 3- Si los comentarios llegan y se cargan correctamente, el botón de "Ver comentarios"
// debe desaparecer de la interfaz. Así evitamos que se vuelva a llamar a la API.
// 4- Solo deben cargarse los primeros 10 comentarios que nos llegan.
