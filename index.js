

async function BuscarPokemon() {

    let Resulstado = document.getElementById("Resultado")
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ID.value}`)
    const data = await response.json()
    
    document.getElementById("Nombre").innerHTML = data.name
    document.getElementById("Imagen").src = data.sprites.front_default
    document.getElementById("Tipo").innerHTML = data.types[0].type.name
}             