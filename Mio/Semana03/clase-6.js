/* -------------------------------------------------------------------------- */
/*                        [4] FUNCION: marcar favorito                        */
/* -------------------------------------------------------------------------- */
// - buscar el album por id en el array 
// - cambiar el estado del like
// - volver a renderizar
function marcarFavorito() {
    
    //seleccionar todos lo botones del like <i>
    const botonesDeLike = document.querySelectorAll(".fa-heart");
   // console.log(botonesDeLike);

   botonesDeLike.forEach(boton => {
    boton.addEventListener("click", function(evento){
        console.log(evento)
        console.log(evento.target)
        console.log(evento.target.id)

        let albumId = evento.target.id;
        albumesFamosos.forEach(album => {
            if (album.id == albumId) {
                console.log(`Coincide ${albumId} con ${album.id}`);
                console.log(album.like)

               // album.like = !album.like;//forma corta

                //forma larga para colocar el corazon
                if (album.like == false) {
                    album.like = true
                }else{
                    album.like =  false
                }
                console.log(album.like)
            }
        });
        //Renderizar (pintar) nuevamente las tarjetas para que se pinten los like de los albumes
        renderizarAlbumes (albumesFamosos)

        //Recursiovidad para agregar nuevamente el listener para seguir escuchando el evento de los botones,
        //es decir volver a llamarla para ponerlas a funcionar
        mostrarDatosEnPerfil(albumesFamosos)
        marcarFavorito();

    })

   });
}
marcarFavorito()



/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [5] FUNCION: Eliminar album                        */
/* -------------------------------------------------------------------------- */
// Debemos desarrollar la funcion de eliminar un album. Para esto le vamos a 
// preguntar al usuario cual quiere eliminar.
// Vamos a seguir las indicaciones que nos permiten lograrlo utilizando eventos.
// 1- Hay que escuchar el evento de 'keydown' para detectar cuando el usuario
// presiona la tecla f
// 2- Una vez que detectamos la tecla, debemos mostrarle un prompt al usuario
// para que ingrese el nombre del album que desea eliminar
// 3- Podemos buscar la posicion del almbum buscado en el array con la funcion .findIndex()
// 4- Si la busqueda nos da un resultado válido, procedemos a borrar el objeto del array
// 5- Acto seguido debemos llamar a las funciones de renderizar y marcar favorito para que sean nuevamente aplicadas.

function eliminarAlbum() {

    window.addEventListener('keydown', function(event) {
        if (event.key === 'f') {

          console.log('La tecla "f" ha sido presionada');
          // mensaje cuando se presione la tecla f
          let albumEliminar = prompt("Ingrese el nombre del álbum a eliminar:").toUpperCase().trim();
          console.log(albumEliminar);

          //buscar el album
          const posicionAlbum = albumesFamosos.findIndex(album => album.nombre.toUpperCase() === albumEliminar);
          console.log(posicionAlbum);

          // Si se encontró el álbum, eliminarlo del array
          if (posicionAlbum !== -1) {
            albumesFamosos.splice(posicionAlbum, 1);
            alert(`El álbum "${albumEliminar}" ha sido eliminado.`)
            renderizarAlbumes(albumesFamosos)
            mostrarDatosEnPerfil(albumesFamosos)
            marcarFavorito(albumesFamosos)
            } else {
            alert(`El álbum "${albumEliminar}" no fue encontrado.`)
            }

        }
        
      });
}
 //eliminarAlbum();

 //Otra forma de hacerlo mas eficiente y con busnas practicas 

 
 window.addEventListener('keydown', eliminarAlbum2)

 function eliminarAlbum2(evento){
    //desarrollar la funcion
    //console.log(evento.key
    if(evento.code =="KeyF"){
        console.log("presionaste la techa F");
        let albumEliminar = prompt("Ingrese el nombre del álbum a eliminar:").toLowerCase().trim();
        console.log(albumEliminar);

        const posicionAEliminar = albumesFamosos.findIndex(album => album.nombre.toLowerCase() == albumEliminar)
        console.log(posicionAEliminar)

        if(posicionAEliminar ==-1){
            alert(`El álbum "${albumEliminar}" no fue encontrado.`)
        }else{
            albumesFamosos.splice(posicionAEliminar, 1);
            alert(`El álbum "${albumEliminar}" ha sido eliminado.`)
        }
        renderizarAlbumes(albumesFamosos)
        mostrarDatosEnPerfil(albumesFamosos)
        marcarFavorito(albumesFamosos) 
    }
 }