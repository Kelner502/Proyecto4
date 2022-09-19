// VISUALISO LAS FUNCIONES DE JAVA A TRAVES DE  DOCUMENT Y UN ID EN EL HTML....
let lista = document.getElementById("listapokemon")

// CONSULTO EL POKEMON EN LA API POR MEDIO DE ID...

function consultarpokemon(id, num) {
fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
.then(function(response){  
    response.json()
    .then(function (pokemon){
crearPokemon(pokemon, num)

    })
})

 }
// CCONSULTAR POKEMONES ALEATORIOS
 function consultarpokemones() {
    let primerId = Math.round(Math.random() * 150)
    let segundoId = Math.round(Math.random() * 150)
    let terceroId = Math.round(Math.random() * 150)
    let cuartoId = Math.round(Math.random() * 150)
    let quintoId = Math.round(Math.random() * 150)
    let sextoId = Math.round(Math.random() * 150)

// TRAE A 6 POKEMEONES ALETORIOS DESPUES DE LLAMAR AL ID DEL CADA POKEMON

consultarpokemon(primerId, 1)
consultarpokemon(segundoId, 2)
consultarpokemon(terceroId, 3)
consultarpokemon(cuartoId, 4)
consultarpokemon(quintoId, 5)
consultarpokemon(sextoId, 6)

}
//  CREE UNA FUNCION PARA LLAMER LAS FUNCIOES DE JAVA A HTML
function crearPokemon(pokemon,num) {
//VAMOS A CONVERTIR LA DATA EN HTML
let item = lista.querySelector(`#pokemon-${num}`)
// FUNCION PARA VISUALISAR LA IMAGEN DEL POQUEMON EN EL HTML PORMEDIO DE LA ETIQUETA IMG
let imagen = item.getElementsByTagName("img")[0]
imagen.setAttribute("src", pokemon.sprites.front_default)
// FUNCION PARA LLAMR Y MOSTRAR EL NOMBRE DE CADA POKEMON EN EL HTML
let nombre = item.getElementsByTagName("p")[0]
nombre.textContent = pokemon.name

}
// ESTA FUNCION HACE UN LLAMADO DE LA CONSULTA DE POKEMONES Y REALIZA CADA FUNCION ORDENADA POR JAVA SCRIPT
consultarpokemones()
