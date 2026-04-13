async function BuscarPokemon() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ID.value}`)
    const data = await response.json()
    
    document.getElementById("Nombre").innerHTML = data.name
    document.getElementById("Imagen").src = data.sprites.front_default
    if (data.types.length > 1) {
    document.getElementById("Tipo").innerHTML = "Type: " + data.types[0].type.name
    document.getElementById("Tipo2").innerHTML = "Type 2: " + data.types[1].type.name
    } else {
    document.getElementById("Tipo").innerHTML = "Type: " + data.types[0].type.name
    document.getElementById("Tipo2").innerHTML = ""
    }
    document.getElementById("Peso").innerHTML = "Weight: " + data.weight + " kg"
    document.getElementById("Altura").innerHTML = "Height: " + data.height + " ft"
}             