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
    let anioNacimiento = parseInt(prompt("Ingresa el año en que naciste:"));
    datosPersona.ciudad = prompt("Ingresa la ciudad donde vives:");
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
  const fila = document.querySelector("#fila")
  fila.innerHTML = ""

  listado.forEach(materias => {
    fila.innerHTML += `
      <div class= "caja">
        <img src="${materias.imgUrl}" alt="${materias.lenguajes}">
        <p class = "lenguajes">${materias.lenguajes}</p>
        <p class = "bimestre">${materias.bimestre}</p>
      </div>
    `;
    })


/*
    fila.innerHTML = ""
    
      listado.forEach(materias => {

        let caja = document.createElement('div');
        let img = document.createElement("img");
        let parrajoLen = document.createElement("p");
        let parrajoBime = document.createElement("p");
  
        caja.classList.add('caja');
        //img.classList.add('img');
        parrajoLen.classList.add('lenguajes');
        parrajoBime.classList.add('bimestre');
  
        img.setAttribute("src",materias.imgUrl);
        img.setAttribute("alt", materias.lenguajes);
        parrajoLen.textContent = materias.lenguajes;
        parrajoBime.textContent = materias.bimestre;
  
        caja.appendChild(img);
        caja.appendChild(parrajoLen);
        caja.appendChild(parrajoBime);
  
        fila.appendChild(caja);
  
      })*/
  
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const sitio = document.querySelector("#sitio");
  sitio.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
function mostrarTextoSobreMi1() {
  
  window.addEventListener('keydown', function(event) {
      if (event.key === 'f' || event.key === 'F') {
        let sobreMi = document.getElementById('sobre-mi');
        sobreMi.classList.remove('oculto');
      }
      
    });
}
//mostrarTextoSobreMi();
window.addEventListener('keydown', mostrarTextoSobreMi);

function mostrarTextoSobreMi(evento){

  if(evento.code =="KeyF"){
    console.log("presionaste la techa F");
    let sobreMi = document.getElementById('sobre-mi');
    sobreMi.classList.remove('oculto');
  }

}

