/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
    datosPersona.nombre = prompt("Ingrese tu nombre:").toLowerCase().trim();
    let nombresCompletos = datosPersona.nombre.split(" ");
    datosPersona.nombre = nombresCompletos.map((nombre) => nombre.charAt(0).toUpperCase() + nombre.slice(1)).join(" ")

    let anioNacimiento = parseInt(prompt("Ingresa el año en que naciste:"));

    datosPersona.ciudad = prompt("Ingresa la ciudad donde vives:");
    let ciudadCompuesta = datosPersona.ciudad.split(" ");
    datosPersona.ciudad = ciudadCompuesta.map((ciudad) => ciudad.charAt(0).toUpperCase() + ciudad.slice(1)).join(" ")

    let confirmacion = confirm("¿Te interesa JavaScript?");

    if(confirmacion){
      datosPersona.interesPorJs = "Si";
    }else{
      datosPersona.interesPorJs = "No";
    }

    const anioActual = new Date().getFullYear();
    datosPersona.edad = anioActual - anioNacimiento;
}


function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
    let nombreUsuario = document.getElementById('nombre');
    let edadUsuario = document.getElementById('edad');
    let ciudadUsuario = document.getElementById('ciudad');
    let interesesUsuario = document.getElementById('javascript');

    nombreUsuario.textContent = datosPersona.nombre;
    edadUsuario.textContent  = datosPersona.edad;
    ciudadUsuario.textContent  = datosPersona.ciudad;
    interesesUsuario.textContent = datosPersona.interesPorJs;
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const fila = document.querySelector("#fila");
  fila.innerHTML = "";

  listado.forEach(materias => {
    fila.innerHTML += `
      <div class= "caja">
        <img src="${materias.imgUrl}" alt="${materias.lenguajes}">
        <p class = "lenguajes">${materias.lenguajes}</p>
        <p class = "bimestre">${materias.bimestre}</p>
      </div>
    `;
    });
  
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const sitio = document.querySelector("#sitio");
  sitio.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
window.addEventListener('keydown', mostrarTextoSobreMi);

function mostrarTextoSobreMi(evento){

  if(evento.code =="KeyF"){
    let sobreMi = document.getElementById('sobre-mi');
    sobreMi.classList.remove('oculto');
  }
}

