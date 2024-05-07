/* --------------------------- listado de almbumes --------------------------- */
const albumesFamosos = [{
    id: "x123",
    nombre: "Nevermind",
    imagen: "https://m.media-amazon.com/images/I/71DQrKpImPL._SL1400_.jpg",
    like: true
},
{
    id: "y456",
    nombre: "Thriller",
    imagen: "https://img.discogs.com/LfnH5tbhcZ4xRMNLAodIyvea9xA=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-294033-1151290881.jpeg.jpg",
    like: false
},
{
    id: "z789",
    nombre: "The wall",
    imagen: "https://img.discogs.com/EbLYco6R1A-5Z7QJ4t4O1JSzsM8=/fit-in/587x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4620059-1370165707-3841.jpeg.jpg",
    like: false
},
{
    id: "a987",
    nombre: "Abbey Road",
    imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/RDH5EPH2TNENPI73NBWUWWMLPA.jpg",
    like: false
},
{
    id: "b654",
    nombre: "Origin of Symmetry",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_967206-MLA26105577132_102017-O.webp",
    like: false
},
{
    id: "c321",
    nombre: "Back in Black",
    imagen: "https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/07/068660474366a63e1263e53ff370eb50.jpg",
    like: false
}
];



/* -------------------------------------------------------------------------- */
/*                  [1] FUNCION: captar el nombre de usuario                  */
/* -------------------------------------------------------------------------- */
//do while, prompt, innerText
function obtenerUsuario() {
    //const nombreUsuario = document.getElementById("nombreUsuario");
    const nombreUsuario = document.querySelector("#nombreUsuario")

    let usuario = ""
    do{
        usuario = prompt("Ingrese su nombre de Usuario:").toLowerCase().trim()//primero normalizo el nombre de entrada
    }while (usuario === null && usuario === "" && usuario.length < 3); 

        let nombres = usuario.split(" ") //convierto los nombres en un array, o sea los separo por espacio, se vuelve un elemento de array
        //console.log(usuario)
        //console.log(nombres.map(nombre => nombre.charAt(0).toUpperCase() + nombre.slice(1)));
        usuario = nombres.map(nombre => nombre.charAt(0).toUpperCase() + nombre.slice(1)).join(" ");
        //aqui mapeo el aray, tomo el array de nombres, agarro la primera letra de cada elemento, la pongo en mayuscula
        // a partir de la segunda letra del array le concateno y con el join lo regreso a un string. 
        console.log(usuario)

        //insertar el dato en html
       nombreUsuario.textContent = usuario;
       // nombreUsuario.append(document.createTextNode(usuario))//otra opcion
        //nombreUsuario.createTextNode(usuario)// asi no se crea un createtextNode
       // nombreUsuario.innerText = usuario;
       // nombreUsuario.innerHTML = `<div>${usuario}</div>`
}
//obtenerUsuario();

/* -------------------------------------------------------------------------- */
/*                [2] FUNCION: renderizar tarjetas del almbumes               */
/* -------------------------------------------------------------------------- */
//forEach, template strings, innerHTML
function renderizarAlbumes(listado) {
    // capturamos el selector donde inserto los nuevos nodos (o etiquetas HTML)
    //capturar selector
    const covers = document.querySelector(".covers")
    console.log(covers)
    covers.innerHTML = ""//borra contenido previo

    /*//metodo de insercion de nodos
    listado.forEach(album => {
        //primero creamos los selectores que inyectareis akl dom
        const li = document.createElement("li")
        const img = document.createElement("img")
        const p = document.createElement("p")
        const i = document.createElement("i")

        //agregamos los atributos de cada nodo de las etiquetas creadas
        li.setAttribute("data-id",album.id)
        img.setAttribute("src",album.imagen)
        img.setAttribute("alt", album.nombre)

        p.textContent = album.nombre
        i.setAttribute("id", album.id)
        i.setAttribute("class", `fa fa-heart ${album.like ? "favorito" : ""}`)

        //cargar los nuevos nodoas al li y luego el li al cover
        li.appendChild(img)
        li.appendChild(p)
        li.appendChild(i)

        covers.appendChild(li)

        
    });*/
    //Metodo templeate
    listado.forEach(album => {
    covers.innerHTML += `
    <li data-id="${album.id}">
        <img src="${album.imagen}" alt="${album.nombre}">
        <p>${album.nombre}</p>
        <i id="${album.id}" class="fa fa-heart ${album.like ? "favorito" : ""}"></i>
    </li>
    `
    })
};

renderizarAlbumes(albumesFamosos);



/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                   [3] FUNCION: mostrar datos del usuario                   */
/* -------------------------------------------------------------------------- */
// Dentro del div '.perfil' tenemos un parrafo con 2 span en los que debemos colocar
// correctamente su contenido.
// Para eso debemos hacer ciertos calculos y colocar esa info en el HTML. Debemos:
// 1- contar la cantidad de albumes del array y pintarlo en el span correspondiente
// 2- contar la cantidad de favoritos y pintarlo en el span correspondiente
// 3- tener en cuenta: usar las palabra en plural o en singular, según cuando
// sea necesario ( es decir: 1 album, 1 favorito / 2 albumes, 3 favoritos )
function mostrarDatosEnPerfil(albumes) {
// desarrollar la función 👇

let cantidadAlbunes = albumes.length;
let cantidadFavoritos = albumes.filter(album => album.like).length
console.log(cantidadAlbunes);
console.log(cantidadFavoritos);

const albumesText = document.getElementById("cant-albums");
albumesText.innerText = `${cantidadAlbunes} ${cantidadAlbunes === 1  ? 'album' : 'albumnes'  }`;
const favoritosText = document.getElementById("cant-favoritos");
favoritosText.innerText = `${cantidadFavoritos} ${cantidadFavoritos === 1  ? 'favorito' : 'favoritos'  }`;

}
//mostrarDatosEnPerfil(albumesFamosos);

function mostrarDatosEnPerfil2(albumes) {
    // desarrollar la función 👇
    
    let cantidadAlbunes = document.querySelector("#cant-albums");
    let cantidadFavoritos = document.getElementById("cant-favoritos");

    let contadorAlbumes = 0;
    let contadorFavoritos =0;

    albumes.forEach(albumes => {
        contadorAlbumes++;//Esto es paraq contar la totalidad de los albumes que tengo disponible
        //ahora vamos a buscar y contar las propioedades de album.like
        if(albumes.like){
            contadorFavoritos++;
        }

        if(contadorAlbumes == 1){
            cantidadAlbunes.textContent = contadorAlbumes + " álbum"
        }else{
            cantidadAlbunes.textContent = `${contadorAlbumes} álbumes`
        }

        if(contadorFavoritos == 1){
            cantidadFavoritos.textContent = contadorFavoritos + " álbum"
        }else{
            cantidadFavoritos.textContent = `${contadorFavoritos} álbumes`
        }
    });
    
    
    }
    mostrarDatosEnPerfil2(albumesFamosos);
    



