// 👇Acá vemos que el document nos dá acceso a todo el DOM, ese arbol que contiene todos los nodos de nuestro sitio
//console.log(document)

/*
Ahora vamos a utilizar 2 métodos propios de document que nos facilitan "pescar" elementos en el sitio:
- querySelector()
- querySelectorAll()
*/
//obtener el titulo principal
const titulo = document.querySelector("h1")
//console.log(titulo)
//console.log(titulo.textContent);//solo selecciona el texto plano de la etiqueta

const itemsMenu = document.querySelector(".info");
const itemsClima = document.querySelector(".info.clima");
const navItems = document.querySelectorAll("ul li");

const image = document.querySelector("[src='./img/futbol.webp']");

//console.log(image);

/* ------------------------------- Practicando ------------------------------ */
// Seleccionamos la lista de noticias y revisamos su informacion interna.
// Aprovechamos que la NodeList es un ITERABLE, entonces podemos recorrerla.
// 🚩 No es un Array.
const articulos = document.querySelectorAll("article");
//console.log(articulos);
/*
for (let i = 0; i < articulos.length; i++) {
    console.log( articulos[i].innerText);
    
}*///innerText y textContent captura sin las etiquetas, solo el texto
//innerHTML captura todo hasta las etiquetas
articulos.forEach(articulos => {
    const titular = articulos.querySelector("h2").textContent//capturo el titulo no mas
    console.log(titular)
});
// 💪🏼 Ahora llevemos esto un paso adelante!


// Vamos a interactuar con el DOM para agregarle mas estilos a nuestro sitio.
// 👇 Primero capturemos todos los elementos que vamos a modificar.
const menuItems = document.querySelectorAll("nav li")
console.log(menuItems)
console.log(menuItems[0].style.textTransform = "uppercase");

menuItems.forEach(item => {
    item.style.textTransform  = "uppercase"
    item.style.color = "aqua"
    item.style.backgroundColor = "rgba(255,255,255,0.2)"
    item.style.borderRadius = "50vh"
    item.style.padding = "10px"
    item.style.marginTop = "20px"
});

/* ---------------------------- Editado los ITEMS --------------------------- */
// 👇 Acá podemos ver todas las propiedades CSS que podemos modificar con JS
// console.log(menuItems);

const sitio = document.querySelector("body")
console.log(sitio)
console.log(sitio.classList)
/*console.log(sitio.classList.add("dark"))
console.log(sitio.classList.remove("dark"))
console.log(sitio.classList.contains("dark"))
console.log(sitio.classList.toggle("dark"))
console.log(sitio.classList.toggle("dark"))*/



// Agregamos manualmente nuevos estilos en el menú



// Sintaxis de función flecha  (Arrow Function) //


/* ----------------------------- Editando clases ---------------------------- */

// vamos probando uno a uno los métodos



/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// Primero debemos comentar o eliminar las líneas que modifican las clases de "sitio"
// 1- Desarrollar la función a continuacion para que el usuario elija el tema del sitio.
// 2- Debemos preguntarle al usuario mediante un confirm si desea usar el modo oscuro.
// 3- Si el usuario confirma debemos aplicar la clase "dark" al "sitio", si cancela debe quedar en modo claro.
// 4- A su vez, si está en modo onsecuritypolicyviolation, el texto del boton debe decir "Cambiar a modo claro 🌞". De lo contrario, si está en modo claro debeb decir "Cambiar a modo oscuro 🌛"
function elegirTema() {

}
elegirTema();