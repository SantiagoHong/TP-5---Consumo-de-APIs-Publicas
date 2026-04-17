async function BuscarPokemon() {
    const pokemonInfo = document.getElementById("PokemonInfo")

    pokemonInfo.innerHTML = `
        <h2 id="Nombre">Buscando...</h2>
        <img id="Imagen" src="images/loading.gif" alt="Imagen del Pokemon">
        <p id="Tipo"></p>
        <p id="Tipo2"></p>
        <p id="Peso"></p>
        <p id="Altura"></p>
    `
    try {
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
        document.getElementById("Peso").innerHTML = "Weight: " + data.weight/10 + " kg"
        document.getElementById("Altura").innerHTML = "Height: " + data.height/10 + " m"

    } catch (error) {
       
        document.getElementById("Nombre").innerHTML = "Pokemon not found"
        document.getElementById("Imagen").src = "images/x.png"

    }
}