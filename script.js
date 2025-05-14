const peliculas = [
  {
    id: 1,
    titulo: "Inception",
    genero: "Ciencia ficción",
    año: 2010,
    descripcion: "ladron, tegnología, sueños",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwkCOfLjujvWfdrUKYFXmdG4ncDDRt1m-QtzNLcsRD2vWnMr2r9-3-AeaBdww8EdOtjoKb7vq7qBhx2PNGupJXCUswZ4wqgYm9msiO8eM"
  },
  {
    id: 2,
    titulo: "Interstellar",
    genero: "Ciencia ficción",
    año: 2014,
    descripcion: "Fisica, padre e hija, drama",
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/8698aa0aa73e5acae0d4ec7fd46e6be40e7b9bd14668ce6d8694ae7442d2a722.jpg"
  },
  {
    id: 2,
    titulo: "Diario de un pasion",
    genero: "Romance",
    año: 2004,
    descripcion: "amor, pasion, drama",
    imagen: "https://mx.web.img3.acsta.net/medias/nmedia/18/67/61/01/20070878.jpg"
  },
    {
    id: 3,
    titulo: "La monja",
    genero: "Terror",
    año: 2020,
    descripcion: "religion, terror, demonología",
    imagen: "https://m.media-amazon.com/images/M/MV5BZjE0ZjIwZDYtN2UyNi00YTEzLWJlZjAtNWQxYjk5OWE1YjJiXkEyXkFqcGc@._V1_.jpg"
  },
    {
    id: 4,
    titulo: "Crepusculo",
    genero: "Drama",
    año: 2010,
    descripcion: "Vampiros, dramas, romances",
    imagen: "https://m.media-amazon.com/images/M/MV5BNTA0MDYzZWUtZjlkOC00N2JjLWEyZTEtYmUyZDEyOWM5MTVlXkEyXkFqcGc@._V1_.jpg"
  },
  {
    id: 2,
    titulo: "Rapidos y furiosos",
    genero: "accion",
    año: 2001,
    descripcion: "velocidad, aciion, carros",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKZ3mITmF3orokyIdNmPyUJcs5Ru_AYNqVhA&s"
  },
  

];
function init(){
    MostrarCard(peliculas);
}
function MostrarCard(lista) {
  const contenedor = document.getElementById("contenedor-tarjetas");
  contenedor.innerHTML = "";

  for (let i = 0; i < lista.length; i++) {
    const peliculas = lista[i];

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("col-md-3", "mb-4");

    tarjeta.innerHTML = `
      <div class="card h-100">
        <img class="imagenes-card" src="${peliculas.imagen}" class="card-img-top" alt="${peliculas.titulo}">
        <div class="card-body">
          <h2 class="card-title">${peliculas.titulo}</h2>
          <h4>Fecha: ${peliculas.genero}</h4>
          <h4>Fecha: ${peliculas.año}</h4>
          <h4>Fecha: ${peliculas.descripcion}</h4>

          <button class="mi-boton "class="btn btn-success" onclick="Ver()">Ver Detalles</button>
        </div>
      </div>
    `;

    contenedor.appendChild(tarjeta);
  }
}

function filtrar() { 
    let seleccion = document.getElementById("filtro").value;

    let pelisFiltradas = peliculas.filter(pelicula => pelicula.titulo == seleccion);


    MostrarCard(pelisFiltradas);
}
function Ver(){
    alert("Esta pelicula tine una calificacion 10/10")
}